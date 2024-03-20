
Rails.application.routes.draw do
  namespace :api do
    namespace :recipes do
      get 'search', to: 'recipes#search'
      get ':id/summary', to: 'recipes#summary'
      get 'mealplan', to: 'recipes#mealplan'
      get ':id/instructions', to: 'recipes#instructions'
    end
  end
  resources :articles
  devise_for :users,
            controllers: {
              sessions: 'users/sessions',
              registrations: 'users/registrations'
            }
  get '/member-data', to: 'members#show'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
