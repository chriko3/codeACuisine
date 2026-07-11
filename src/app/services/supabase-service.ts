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

  /**
   * Subscribes to recipe changes by ID.
   * Updates the likes value when the recipe changes.
   */
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

  /**
   * Removes all active recipe subscriptions.
   */
  unsubscribeRecipes() {
    this.supabase.removeAllChannels();
  }

  /**
   * Saves a new recipe to the database.
   * Inserts the recipe data and returns the saved result.
   */
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

  /**
   * Gets all recipes from the database.
   * Returns recipes sorted by newest first.
   */
  async getAllRecipes() {
    let { data } = await this.supabase
      .from('recipes')
      .select('*')
      .order('id', { ascending: false });
    return data;
  }

  /**
   * Gets a specific amount of latest recipes.
   * Returns the newest recipes from the database.
   */
  async getAmountLastRecipes(amount: number) {
    let { data } = await this.supabase
      .from('recipes')
      .select('*')
      .order('id', { ascending: false })
      .limit(amount);
    return data;
  }

  /**
   * Gets recipes by cuisine type.
   * Returns all recipes matching the given cuisine.
   */
  async getRecipesByCuisine(cuisine: string) {
    let { data } = await this.supabase.from('recipes').select('*').eq('cuisine', cuisine);
    return data;
  }

  /**
   * Gets a recipe by its ID.
   * Returns the matching recipe data.
   */
  async getRecipesById(id: number) {
    let { data } = await this.supabase.from('recipes').select('*').eq('id', id);
    return data;
  }

  /**
   * Gets recipes by name.
   * Returns all recipes with the given name.
   */
  async getRecipesByName(name: string) {
    let { data } = await this.supabase.from('recipes').select('*').eq('name', name);
    return data;
  }

  /**
   * Adds one like to a recipe.
   * Updates the recipe like count in the database.
   */
  async likeRecipeById(id: number) {
    const { data } = await this.supabase.from('recipes').select('likes').eq('id', id).single();
    await this.supabase
      .from('recipes')
      .update({ likes: (data?.likes ?? 0) + 1 })
      .eq('id', id);
  }

  /**
   * Removes one like from a recipe.
   * Updates the recipe like count in the database.
   */
  async unlikeRecipeById(id: number) {
    const { data } = await this.supabase.from('recipes').select('likes').eq('id', id).single();
    await this.supabase
      .from('recipes')
      .update({ likes: (data?.likes ?? 0) - 1 })
      .eq('id', id);
  }
}
