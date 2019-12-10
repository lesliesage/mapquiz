class CitiesController < ApplicationController

    def index
        cities = City.all 
        render json: cities.to_json(city_serializer)
    end


    def randomtwenty
        random_nums = []
        
        20.times do 
            num = (rand() * 200).to_i
           random_nums << num
        end

       random_cities = random_nums.map{|num| City.all[num]} 
        render json: random_cities.to_json(city_serializer)
    end


    private


    def city_serializer
        {:except => [:created_at, :updated_at]}
    end


end
