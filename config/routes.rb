ProjectOne::Application.routes.draw do

  get "home/index"

  get '/api/show' => 'home#show', defaults: {format: :json}

  root to: 'home#index'
end
