class CitiesController < ApplicationController

    def index
        cities = City.all 
        render json: cities.to_json(city_serializer)
    end

    private

    def city_serializer
        {:except => [:created_at, :updated_at]}
    end


end
