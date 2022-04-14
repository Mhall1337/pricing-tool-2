Rails.application.routes.draw do
  resources :locations
  resources :shipments
  resources :dispatchers
  resources :carriers
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post '/search', to: "shipments#search"
  get '/search/', to: "shipments#search"
  post '/signup', to: "users#signup"
end
