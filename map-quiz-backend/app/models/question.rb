class Question < ApplicationRecord
    belongs_to :game
    belongs_to :city
end
