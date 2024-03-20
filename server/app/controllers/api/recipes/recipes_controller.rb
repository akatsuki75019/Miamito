module Api
  module Recipes
    class RecipesController < ApplicationController
      include SpoonacularFetch

      # GET /api/recipes/search
      def search
        search_term = params[:query]
        page = params[:page] || 1
        results = SpoonacularFetch.search_recipes(search_term, page.to_i)
        render json: results
      end

      # GET /api/recipes/:id/summary
      def summary
        recipe_id = params[:id]
        result = SpoonacularFetch.get_recipe_summary(recipe_id)
        render json: result
      end

      # GET /api/recipes/mealplan
      def mealplan
        plan = SpoonacularFetch.getMealPlan
        render json: plan
      end

      # GET /api/recipes/:id/instructions
      def instructions
        recipe_id = params[:id]
        instructions = SpoonacularFetch.getRecipeInstructions(recipe_id)
        render json: instructions
      end

      def informations
        recipe_id = params[:id]
        informations = SpoonacularFetch.get_recipe_informations(recipe_id)
        render json: informations
      end
    end
  end
end