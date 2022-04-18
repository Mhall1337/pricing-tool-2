class SessionsController < ApplicationController
   skip_before_action :authorize, only: [:signout, :signin]

  def signin
    user = User.find_by(username: params[:username])
    # session[:user_id] = user.id
    # render json: user, status: :created
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { errors: "Unauthorized login attempt" }, status: :unauthorized
    end
  end

  def signout
    if session[:user_id]
      session[:user_id] = nil
    else
      render json: { errors: "not authorized" }, status: :unauthorized
    end
  end
end
