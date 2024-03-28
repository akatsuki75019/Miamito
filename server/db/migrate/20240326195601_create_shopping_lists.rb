class CreateShoppingLists < ActiveRecord::Migration[7.1]
  def change
    create_table :shopping_lists do |t|
      t.references :user, null: false, foreign_key: true
      t.references :ingredient, null: false, foreign_key: true
      t.string :quantity

      t.timestamps
    end
  end
end
