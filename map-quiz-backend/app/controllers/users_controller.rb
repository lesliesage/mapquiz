class UsersController < ApplicationController
    skip_before_action :verify_authenticity_token
    
    def index
        users = User.all 
        render json: users.to_json(user_serializer)
    end

    def show 
        user = User.find_by(username: params[:username])
        render json: user.to_json(user_serializer)
    end

    def create
        user = User.create(user_params)
        render json: user.to_json(user_serializer)
    end

    private

    def user_serializer
        {:include => 
            {:games => {:include => 
                {:questions => {:include => 
                        {:city => {:except => [:created_at, :updated_at]}},
                        :except => [:created_at, :updated_at]
                }}, 
            :except => [:updated_at]
            }},
        :except => [:created_at, :updated_at]
    }
    end

    def user_params
        params.require(:user).permit(:username, :password)
    end


end
