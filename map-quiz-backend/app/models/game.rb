class Game < ApplicationRecord
    has_many :questions
    has_many :cities, through: :questions
    belongs_to :user
   
end
