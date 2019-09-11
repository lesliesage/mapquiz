class User < ApplicationRecord
    has_many :games
    validates :username, uniqueness: true
    has_secure_password
end

