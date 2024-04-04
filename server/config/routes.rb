
Rails.application.routes.draw do
  namespace :api do
    namespace :recipes do
      get ':id/summary', to: 'recipes#summary'
      get 'mealplan', to: 'recipes#mealplan'
      get ':id/information', to: 'recipes#information'
      post 'favorite', to: 'recipes#createFavorite'
      get 'favorite', to: 'recipes#indexFavorite'
      delete 'favorite', to: 'recipes#destroyFavorite'
      get 'preloaded', to: 'recipes#preloaded'
      get ':id/ingredients', to: 'recipes#ingredients'
      get 'search', to: 'recipes#search'
      get ':id/nutrition', to: 'recipes#nutrition'
      resources :shopping_lists

    end
  end

  devise_for :users,
    controllers: {
      sessions: 'users/sessions',
      registrations: 'users/registrations'
    }

  resources :users, only: [:show, :update, :destroy] do
    get 'edit', on: :member
    get 'member-data', on: :collection, to: 'members#show'
  end

  resources :articles

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
