class User < ApplicationRecord
    has_secure_password
    validates :username, uniqueness: true, presence: true 

    def self.new_user(params)
        user = User.new
        user.username = params[:username]
        user.password_digest = BCrypt::Password.create(params[:password])
        user
    end
end
