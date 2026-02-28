import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { config } from '$lib/config';
import { env } from '$env/dynamic/private';

export const load: PageServerLoad = async ({ url }) => {
  const token = url.searchParams.get('token');
  if (!env.ADMIN_SECRET || token !== env.ADMIN_SECRET) {
    throw redirect(302, '/');
  }
  return {
    checklist: config.planningChecklist ?? [],
    rolesAndTasks: config.rolesAndTasks ?? {},
    token
  };
};
