class GamesController < ApplicationController

    def index
        games = Game.all 
        render json: games.to_json(game_serializer)
    end

    def top_ten
       sorted = Game.all.sort_by {|game| game.score}
       ten = sorted[-10..-1]
       render json: ten.to_json(game_serializer)
    end

    private

    def game_serializer
        {:except => [:updated_at]}
    end
end
