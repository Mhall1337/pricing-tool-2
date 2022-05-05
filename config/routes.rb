Rails.application.routes.draw do
  resources :carrier_notes
  resources :locations
  resources :shipments
  resources :dispatchers
  resources :carriers
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post '/signup', to: "users#signup"
  post '/signin', to: "sessions#signin"
  delete '/signout', to: "sessions#signout"
  post '/radius', to: "locations#show_nearby_locations"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#signout"

end
