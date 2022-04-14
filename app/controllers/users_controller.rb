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
    
    private
    def permitParams
        params.permit(:username, :password, :confirmPassword)
    end
end
