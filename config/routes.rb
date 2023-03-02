Rails.application.routes.draw do
  
  resources :playlist_songs
  resources :friendships
  resources :favorites
  resources :songs
  resources :playlists
  resources :users

  delete "/logout", to: "sessions#logout"
  post "/login", to: "sessions#login"
  post "/signup", to: "users#create"
  get "/authorized_user", to: "users#show"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  get '/spotify/search', to: 'spotify#search'

end
