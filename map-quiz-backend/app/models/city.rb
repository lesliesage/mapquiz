class City < ApplicationRecord
    has_many :questions
    has_many :games, through: :questions
end
