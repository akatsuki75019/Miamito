class RemoveColumnsFromShoppingLists < ActiveRecord::Migration[7.1]
  def change
    remove_column :shopping_lists, :ingredient_id, :bigint
    remove_column :shopping_lists, :quantity, :string
  end
end
