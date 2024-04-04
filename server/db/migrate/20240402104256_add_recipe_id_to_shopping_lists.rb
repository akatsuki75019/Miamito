class AddRecipeIdToShoppingLists < ActiveRecord::Migration[7.1]
  def change
    add_column :shopping_lists, :recipe_id, :bigint
  end
end
