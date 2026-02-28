import { createClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/private';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
  const secret = url.searchParams.get('token');
  const adminSecret = env.ADMIN_SECRET;
  if (!adminSecret || secret !== adminSecret) {
    return new Response('Unauthorized', { status: 401 });
  }

  const supabaseUrl = env.PUBLIC_SUPABASE_URL || env.SUPABASE_URL;
  const supabaseKey = env.SUPABASE_SERVICE_ROLE_KEY || env.SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseKey) {
    return new Response('RSVP storage not configured', { status: 503 });
  }

  const supabase = createClient(supabaseUrl, supabaseKey);
  const { data: rows, error } = await supabase
    .from('rsvps')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  const headers = ['name', 'email', 'attending', 'plus_one', 'notes', 'created_at'];
  const escape = (v: unknown): string => {
    if (v == null) return '';
    const s = String(v).replace(/\r?\n/g, ' ').trim();
    return s.includes(',') || s.includes('"') ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const csv = [
    headers.join(','),
    ...(rows ?? []).map((r) => headers.map((h) => escape(r[h])).join(','))
  ].join('\n');

  return new Response(csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': 'attachment; filename="rsvps.csv"'
    }
  });
};
