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

  async saveRecipes(
    name: string,
    time: number,
    persons: number,
    cuisine: string,
    dietPreferences: string,
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
        dietPreferences: dietPreferences,
        cookingTime: cookingTime,
        energie: energie,
        protein: protein,
        fat: fat,
        carbs: carbs,
        // yourIngredients:yourIngredients,
        // extraIngredients:extraIngredients,
        // directions:directions
      })
      .select();
    return data;
  }
  async getRecipesByCuisine(cuisine: string) {
    let { data } = await this.supabase.from('recipes').select('*').eq('cuisine', cuisine);
    return data;
  }
}
