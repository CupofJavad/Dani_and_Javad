declare global {
  namespace App {
    interface Error {
      message: string;
    }
    interface Locals {
      supabase?: import('@supabase/supabase-js').SupabaseClient;
    }
    interface PageData {
      config: import('$lib/config').WeddingConfig;
    }
    interface PageState {}
  }
}

export {};
