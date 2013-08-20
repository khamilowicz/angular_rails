ProjectOne::Application.routes.draw do

  get "home/index"

  namespace :api do 
    resources :tasks
  end

  get '/api/show' => 'home#show', defaults: {format: :json}

  root to: 'home#index'
end
