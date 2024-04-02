module Api
  module Recipes
    class RecipesController < ApplicationController
      include SpoonacularFetch
      before_action :authenticate_user!, only: [:createFavorite, :indexFavorite, :destroyFavorite, :add_to_shopping_list]


      def ingredients
        recipe = Recipe.find(params[:id])
        ingredients = recipe.recipe_ingredients.includes(:ingredient).map do |ri|
          { name: ri.ingredient.name, quantity: ri.quantity }
        end

        render json: { ingredients: ingredients, recipe_id: recipe.id }
      rescue ActiveRecord::RecordNotFound
        render json: { error: "Recette non trouvée" }, status: :not_found
      end


      def preloaded
        recipes = Recipe.all 
        render json: recipes
      end

      def show
        recipe = Recipe.find(params[:id])
        render json: recipe
      end

      # GET /api/recipes/search
      def search
        search_term = params[:query]
        page = params[:page] || 1
        results = SpoonacularFetch.search_recipes(search_term, page.to_i)
        results["results"].each do |result|
          Recipe.find_or_create_by(spoonacular_id: result["id"]) do |r|
            r.title = result["title"]
            r.spoonacular_id = result["id"]
            r.servings = result["servings"]
            r.readyInMinutes = result["readyInMinutes"]
          end

        end

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

      def information
        recipe_id = params[:id]
        informations = SpoonacularFetch.get_recipe_information(recipe_id)
        render json: informations
      end

      def createFavorite
        recipe = Recipe.find_or_create_by(spoonacular_id: params[:spoonacular_id]) do |r|
          r.title = params[:title]
          r.summary = params[:summary]
        end
        current_user.recipes << recipe unless current_user.recipes.include?(recipe)
        render json: recipe, status: :created
      end
    
      def indexFavorite
        render json: current_user.recipes
      end
    
      def destroyFavorite
        recipe = current_user.recipes.find(params[:id])
        current_user.recipes.delete(recipe)
        render json: { message: 'Recipe removed from favorites' }, status: :ok
      end

      def add_to_shopping_list
        user = current_user # Assurez-vous d'avoir une méthode pour récupérer l'utilisateur courant
        recipe = Recipe.find(params[:recipe_id])
      
        recipe.ingredients.each do |ingredient|
          user.shopping_lists.create(ingredient: ingredient, quantity: ingredient.recipe_ingredients.find_by(recipe_id: recipe.id).quantity)
        end
      
        render json: { message: "Ingrédients ajoutés à la liste de courses" }, status: :ok
      rescue ActiveRecord::RecordNotFound
        render json: { error: "Recette non trouvée" }, status: :not_found
      end

      def nutrition
        recipe_id = params[:id]
        nutrition = SpoonacularFetch.get_recipe_nutrition(recipe_id)
        render json: nutrition
      end
    end
  end
end