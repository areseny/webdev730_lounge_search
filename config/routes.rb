Rails.application.routes.draw do
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :locations, only: [:index]
    # resources :bookings
    # resources :reviews
  end  
  root to: 'static_pages#root'
  
end
