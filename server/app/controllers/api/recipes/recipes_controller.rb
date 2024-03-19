module Api
  module Recipes
    class RecipesController < ApplicationController
      include SpoonacularFetch

      # GET /api/recipes/search
      def search
        search_term = params[:searchTerm]
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
    end
  end
end