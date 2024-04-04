
Rails.application.routes.draw do
  namespace :api do
    namespace :recipes do
      get ':id/summary', to: 'recipes#summary'
      get 'mealplan', to: 'recipes#mealplan'
      get ':id/instructions', to: 'recipes#instructions'
      get ':id/information', to: 'recipes#information'
      post 'favorite', to: 'recipes#createFavorite'
      get 'favorite', to: 'recipes#indexFavorite'
      delete 'favorite', to: 'recipes#destroyFavorite'
      get 'preloaded', to: 'recipes#preloaded'
      get ':id/ingredients', to: 'recipes#ingredients'
      get 'search', to: 'recipes#search'
      resources :shopping_lists



      get ':id/nutrition', to: 'recipes#nutrition'

    end
  end
  resources :users, only: [:show, :update] do
    get 'edit', on: :member
    get 'member-data', on: :collection, to: 'members#show'
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
