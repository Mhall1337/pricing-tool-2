class UsersController < ApplicationController
    def signup
        user = User.create(username: params[:username], password_digest: params[:password])
        render json: user
    end

    private
    def permitParams
        params.permit(:username, :password, :confirmPassword)
    end
end
