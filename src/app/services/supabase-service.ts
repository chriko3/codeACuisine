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

  subscribeToRecipesByIdGetLikes(id: number, callback: (likes: number) => void) {
    this.supabase
      .channel('custom-all-channel')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'recipes', filter: `id=eq.${id}` },
        (payload: any) => {
          const likes = payload.new.likes;
          callback(likes);
        },
      )
      .subscribe();
  }

  unsubscribeRecipes() {
    this.supabase.removeAllChannels();
  }

  async saveRecipes(
    name: string,
    time: number,
    persons: number,
    cuisine: string,
    dietpreferences: string,
    cookingTime: number,
    energie: number,
    protein: number,
    fat: number,
    carbs: number,
    yourIngredients: number,
    extraIngredients: number,
    directions: number,
  ) {
    const { data } = await this.supabase
      .from('recipes')
      .insert({
        name: name,
        time: time,
        persons: persons,
        cuisine: cuisine,
        dietpreferences: dietpreferences,
        cookingTime: cookingTime,
        energie: energie,
        protein: protein,
        fat: fat,
        carbs: carbs,
        yourIngredients: yourIngredients,
        extraIngredients: extraIngredients,
        directions: directions,
      })
      .select();
    return data;
  }

  async getAllRecipes() {
    let { data } = await this.supabase
      .from('recipes')
      .select('*')
      .order('id', { ascending: false });
    return data;
  }

  async getRecipesByCuisine(cuisine: string) {
    let { data } = await this.supabase.from('recipes').select('*').eq('cuisine', cuisine);
    return data;
  }

  async getRecipesById(id: number) {
    let { data } = await this.supabase.from('recipes').select('*').eq('id', id);
    return data;
  }

  async getRecipesByName(name: string) {
    let { data } = await this.supabase.from('recipes').select('*').eq('name', name);
    return data;
  }
}
