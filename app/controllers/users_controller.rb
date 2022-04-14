class UsersController < ApplicationController
    def signup
        user = User.new_user(params)
        if user.valid?
            user.save
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end
    def signin
        user = User.find_by(username: params[:username])
        render json: user
        
    end

    private
    def permitParams
        params.permit(:username, :password, :confirmPassword)
    end
end
