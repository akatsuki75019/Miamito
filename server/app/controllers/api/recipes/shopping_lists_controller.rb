class Api::Recipes::ShoppingListsController < ApplicationController
  before_action :set_shopping_list, only: [:show, :update, :destroy]
  respond_to :json  
  before_action :authenticate_user!




  # GET /api/v1/shopping_lists
  def index
    @shopping_lists = ShoppingList.all
    render json: @shopping_lists
  end

  # GET /api/v1/shopping_lists/:id
def show
  @shopping_list = current_user.shopping_lists

  if @shopping_list
    render json: @shopping_list
  else
    render json: { error: 'Shopping list not found' }, status: :not_found
  end
end

  # POST /api/v1/shopping_lists
  def create
    @shopping_list = current_user.shopping_lists.new(shopping_list_params) # On crée une nouvelle liste de courses pour l'utilisateur courant
    if @shopping_list.save
      render json: @shopping_list, status: :created
    else
      render json: @shopping_list.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/v1/shopping_lists/:id
  def update
    if @shopping_list.update(shopping_list_params)
      render json: @shopping_list
    else
      render json: @shopping_list.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/v1/shopping_lists/:id
  def destroy
    @shopping_list.destroy
    head :no_content
  end

  private

  def set_shopping_list
    if current_user
      @shopping_list = current_user.shopping_lists
      render json: { error: 'Shopping list not found' }, status: :not_found unless @shopping_list
    else
      render json: { error: 'User not authenticated' }, status: :unauthorized
    end
  end
  def shopping_list_params
    params.require(:shopping_list).permit(:recipe_id)
  end


end