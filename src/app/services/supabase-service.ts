import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  supabase = createClient(
    'https://hhutavypjzoclmcjakui.supabase.co',
    'sb_publishable_xGeMRhxNbq7I8qxqfCv_oA_njqQlwzr',
  );

  async saveRecipes(recipe: any) {
    const { data } = await this.supabase.from('recipes').insert([recipe]).select();
    return data;
  }
}
