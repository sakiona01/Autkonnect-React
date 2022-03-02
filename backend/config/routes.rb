Rails.application.routes.draw do
  #resources :sessions
  resources :users
  resources :rsvps
  resources :reviews
  resources :messages
  resources :events
  resources :conversations
  resources :businesses
  get "/me", to: "sessions#me"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
