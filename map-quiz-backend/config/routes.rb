Rails.application.routes.draw do
  resources :questions
  resources :cities
  get '/randomtwenty', to: 'cities#randomtwenty'
  resources :games, except: [:create]
  get '/topten', to: 'games#top_ten'
  post '/games', to: 'games#create'
  get '/token', to: 'users#token'
  get '/users/:username', to: 'users#show'
  resources :users, except: [:show]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
