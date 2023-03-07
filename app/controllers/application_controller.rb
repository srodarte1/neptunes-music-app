class ApplicationController < ActionController::API
  include ActionController::Cookies
  
rescue_from ActiveRecord::RecordNotFound, with: :not_found
rescue_from ActiveRecord::RecordInvalid, with: :invalid_record
# before_action :authorized_user

  def current_user
      #  byebug
  @user ||= User.find_by(id: session[:user_id]) if session[:user_id]
  end
  def authorized_user
      render json: {errors: "unauthorized"}, status: :unauthorized unless current_user
  end
private

def not_found exceptions
  render json: { error: "#{exceptions.model} not found", stack_trace: exceptions.backtrace }, status: :not_found
end

  def invalid_record invalid 
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end


end
