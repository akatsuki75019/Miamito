class AddServingsAndReadyInMinutesToRecipes < ActiveRecord::Migration[7.1]
  def change
    add_column :recipes, :servings, :integer
    add_column :recipes, :readyInMinutes, :integer
  end
end
