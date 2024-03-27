
Rails.application.routes.draw do
  namespace :api do
    namespace :recipes do
      get 'search', to: 'recipes#search'
      get ':id/summary', to: 'recipes#summary'
      get 'mealplan', to: 'recipes#mealplan'
      get ':id/instructions', to: 'recipes#instructions'
      get ':id/information', to: 'recipes#information'
      post 'favorite', to: 'recipes#createFavorite'
      get 'favorite', to: 'recipes#indexFavorite'
      delete 'favorite', to: 'recipes#destroyFavorite'
      post 'shopping_list', to: 'shopping_lists#create_or_update'
      get 'preloaded', to: 'recipes#preloaded'
      get ':id/ingredients', to: 'recipes#ingredients'



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
