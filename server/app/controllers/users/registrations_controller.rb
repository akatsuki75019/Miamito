# app/controllers/users/registrations_controller.rb

class Users::RegistrationsController < Devise::RegistrationsController
  respond_to :json
  before_action :configure_sign_up_params, only: [:create]
  before_action :configure_account_update_params, only: [:update]

  private

  def respond_with(resource, _opts = {})
    register_success && return if resource.persisted?

    register_failed
  end

  def register_success
    render json: {
      message: 'Signed up sucessfully.',
      user: current_user
    }, status: :ok
  end

  def register_failed
    render json: { message: 'Something went wrong.' }, status: :unprocessable_entity
  end

  protected

  def configure_sign_up_params
    devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name, :email,:birthday, :password, :password_confirmation])
  end

  def configure_account_update_params
    devise_parameter_sanitizer.permit(:account_update, keys: [:first_name, :last_name, :email, :password, :password_confirmation, :current_password])
  end
end