class Api::Recipes::ShoppingListsController < ApplicationController

  def create_or_update
    ingredient_id = params[:ingredient_id]
    added_quantity = params[:quantity]
    
    shopping_list_item = current_user.shopping_lists.find_or_initialize_by(ingredient_id: ingredient_id)
    if shopping_list_item.new_record?
      shopping_list_item.quantity = added_quantity
    else
      new_quantity = calculate_new_quantity(shopping_list_item.quantity, added_quantity)
      shopping_list_item.quantity = new_quantity
    end
  
    if shopping_list_item.save
      render json: shopping_list_item, status: :ok
    else
      render json: shopping_list_item.errors, status: :unprocessable_entity
    end
  end
  
  private

  def shopping_list_params
    params.require(:shopping_list).permit(:ingredient_id, :quantity)
  end

  def calculate_new_quantity(current_quantity, added_quantity)
    current_quantity + added_quantity # À modifier pour gérer les conversions d'unités  (ex: 1 cup + 1 tbsp = 1.125 cup)  1 cup = 16 tbsp = 0.0625 cup  
  end

end