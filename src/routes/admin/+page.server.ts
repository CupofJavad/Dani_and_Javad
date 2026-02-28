import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { createClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/private';

export const load: PageServerLoad = async ({ url }) => {
  const token = url.searchParams.get('token');
  if (!env.ADMIN_SECRET || token !== env.ADMIN_SECRET) {
    throw redirect(302, '/');
  }

  const supabaseUrl = env.PUBLIC_SUPABASE_URL || env.SUPABASE_URL;
  const supabaseKey = env.SUPABASE_SERVICE_ROLE_KEY || env.SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseKey) {
    return { rsvps: [], error: 'RSVP storage not configured.', exportUrl: null };
  }

  const supabase = createClient(supabaseUrl, supabaseKey);
  const { data: rsvps, error } = await supabase
    .from('rsvps')
    .select('id, name, email, attending, plus_one, notes, created_at')
    .order('created_at', { ascending: false });

  if (error) {
    return { rsvps: [], error: error.message, exportUrl: null };
  }
  return { rsvps: rsvps ?? [], exportUrl: `/api/rsvps/export?token=${encodeURIComponent(token!)}` };
};
