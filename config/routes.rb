Rails.application.routes.draw do
  resources :playlist_songs, only: [:create, :destroy]
  resources :friendships #only: [:create, :destroy]
  resources :songs, only: [:index, :show]
  
  resources :users, except: [:create, :show] 
  


  resources :playlists
  delete "/logout", to: "sessions#logout"
  post "/login", to: "sessions#login"
  post "/signup", to: "users#create"
  get "/authorized_user", to: "users#show"
  get '/spotify/search', to: 'spotify#search'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
