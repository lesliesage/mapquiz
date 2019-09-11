class UsersController < ApplicationController
    
    def index
        users = User.all 
        render json: users.to_json(user_serializer)
    end

    def show 
        user = User.find_by(username: params[:username])
        render json: user.to_json(user_serializer)
    end

    def create
        user = User.create(params[:user])
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
        byebug
        params.require(:user).permit(:username, :password)
    end


end
