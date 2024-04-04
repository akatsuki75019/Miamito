class UsersController < ApplicationController
  before_action :authenticate_user!

  # GET /users
  def show
    render json: current_user 
  end

  # PATCH/PUT /users
  def update
    if current_user.update(user_params)
      render json: current_user
    else
      render json: { errors: current_user.errors.full_messages }, status: :unprocessable_entity
    end
  end

# DELETE /users
  def destroy 
    if current_user.destroy
      head :no_content
    else
      render json: { error: 'Une erreur a eu lieu lors de la suppression' }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation, :current_password)
  end
end