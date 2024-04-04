# app/controllers/users/sessions_controller.rb

class Users::SessionsController < Devise::SessionsController
  respond_to :json
  

  private

  def respond_with(_resource, _opts = {})
    render json: {
      message: 'You are logged in.',
      user: current_user
    }, status: :ok
  end

  def respond_to_on_destroy
    log_out_failure  && return if current_user
    
    log_out_success
  end

  def log_out_success
  request.cookie_jar.delete(:_interslice_session)
  render json: { message: 'You are logged out.' }, status: :ok
  end

  def log_out_failure
    render json: { message: 'Hmm nothing happened.' }, status: :unauthorized
  end
end