class ApplicationController < ActionController::API
  before_action :authorize

  private

  def authorize
    @current_user = User.find_by(id: session[:user_id])
    if !@current_user
      render json: { errors: ["not logged in"] }, status: :unauthorized
    end
  end
end
