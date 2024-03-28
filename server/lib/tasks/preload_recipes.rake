
# rails db:preload_recipes 
namespace :db do
  desc 'Load specific recipes into the database from Spoonacular'
  task preload_recipes: :environment do
    recipe_ids = [642712, 654476, 650377, 640117, 640311,715523, 647687] 

    recipe_ids.each do |id|
      info = SpoonacularFetch.get_recipe_information(id)
      Recipe.find_or_create_by(spoonacular_id: id.to_s) do |recipe|
        recipe.title = info["title"]
        recipe.readyInMinutes = info["readyInMinutes"]
        recipe.servings = info["servings"]
      end
      puts "Loaded recipe with Spoonacular ID: #{id}"
    end
  end

  # rails db:preload_ingredients
  task preload_ingredients: :environment do
  Recipe.all.each do |recipe|
    info = SpoonacularFetch.get_recipe_information(recipe.spoonacular_id)
    info["extendedIngredients"].each do |ingredient_info|
      ingredient = Ingredient.find_or_create_by(name: ingredient_info["name"])
      RecipeIngredient.find_or_create_by(
        recipe: recipe, 
        ingredient: ingredient, 
        quantity: "#{ingredient_info['amount']} #{ingredient_info['unit']}"
      )
      end
    end
  end


end