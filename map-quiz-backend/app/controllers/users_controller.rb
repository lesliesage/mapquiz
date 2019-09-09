class UsersController < ApplicationController
    
    def index
        users = User.all 
        render json: users.to_json(user_serializer)
    end

    def show 
        user = User.where('lower(username) = ?', params[:username])
        render json: user.to_json(user_serializer)
    end

    def create
        
        User.create(params[:user])
        render json: user.to_json(user_serializer)
    end

    private

    def user_serializer
        {:include => {
            :games => {
                :include => {:questions => {:except => [:created_at, :updated_at]}
                }
            }
        },
        :except => [:updated_at]
    }
    end

    def user_params
        byebug
        params.require(:user).permit(:username, :password)
    end


end
