class Game < ApplicationRecord
    has_many :questions
    belongs_to :user
    has_many :cities, through: :questions
end
