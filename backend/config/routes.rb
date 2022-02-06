Rails.application.routes.draw do
  resources :sessions
  resources :users
  resources :rsvps
  resources :reviews
  resources :messages
  resources :events
  resources :conversations
  resources :businesses
  resources :events_controllers
  resources :conversations_controllers
  resources :businesses_controllers
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
