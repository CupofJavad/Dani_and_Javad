import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { config } from '$lib/config';
import { createClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/private';

const supabaseUrl = env.PUBLIC_SUPABASE_URL || env.SUPABASE_URL;
const supabaseServiceKey = env.SUPABASE_SERVICE_ROLE_KEY || env.SUPABASE_ANON_KEY;

async function getRsvpCount(): Promise<number> {
  if (!supabaseUrl || !supabaseServiceKey) return 0;
  const supabase = createClient(supabaseUrl, supabaseServiceKey);
  const { count, error } = await supabase
    .from('rsvps')
    .select('*', { count: 'exact', head: true })
    .eq('attending', 'yes');
  if (error) return 0;
  return count ?? 0;
}

export const actions: Actions = {
  submit: async ({ request }) => {
    const formData = await request.formData();
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const attending = String(formData.get('attending') ?? '');
    const plus_one = String(formData.get('plus_one') ?? '').trim();
    const notes = String(formData.get('notes') ?? '').trim();

    if (!name || !email || !attending) {
      return fail(400, { error: 'Name, email, and attending are required.' });
    }

    if (attending === 'yes') {
      const current = await getRsvpCount();
      const plusOneCount = plus_one ? 1 : 0;
      if (current + 1 + plusOneCount > config.capacity) {
        if (!supabaseUrl || !supabaseServiceKey) {
          return fail(503, { error: 'RSVP storage not configured; try again later.' });
        }
        const supabase = createClient(supabaseUrl, supabaseServiceKey);
        await supabase.from('rsvps').insert({
          name,
          email,
          attending: 'waitlist',
          plus_one: plus_one || null,
          notes: notes || null
        });
        if (env.RESEND_API_KEY && email) {
          try {
            await fetch('https://api.resend.com/emails', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${env.RESEND_API_KEY}` },
              body: JSON.stringify({
                from: env.RESEND_FROM || 'Dani & Javad Wedding <onboarding@resend.dev>',
                to: email,
                subject: "You're on the waitlist",
                html: `<p>Hi ${name.replace(/</g, '&lt;')},</p><p>We've received your response. We've reached our capacity for the day—you're on the waitlist and we'll be in touch if a spot opens.</p><p>— Dani & Javad</p>`
              })
            });
          } catch {}
        }
        return { success: true, message: "We've reached our capacity. You're on the waitlist—we'll be in touch!" };
      }
    }

    if (!supabaseUrl || !supabaseServiceKey) {
      return fail(503, { error: 'RSVP storage is not configured. Please set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY (or SUPABASE_ANON_KEY).' });
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    const { error } = await supabase.from('rsvps').insert({
      name,
      email,
      attending,
      plus_one: plus_one || null,
      notes: notes || null
    });

    if (error) {
      return fail(500, { error: 'Could not save your response. Please try again or contact us.' });
    }

    const resendKey = env.RESEND_API_KEY;
    if (resendKey && email) {
      const siteUrl = env.SITE_URL || 'https://your-wedding.vercel.app';
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${resendKey}`
          },
          body: JSON.stringify({
            from: env.RESEND_FROM || 'Dani & Javad Wedding <onboarding@resend.dev>',
            to: email,
            subject: "We've received your RSVP",
            html: `<p>Hi ${name.replace(/</g, '&lt;')},</p><p>We've received your response. We can't wait to celebrate with you!</p><p>— Dani & Javad</p>`
          })
        });
      } catch {
        // Don't fail the RSVP if email fails
      }
    }

    return { success: true, message: "You're on the list! We can't wait to celebrate with you." };
  }
};
