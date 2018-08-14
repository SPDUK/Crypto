# frozen_string_literal: true

Rails.application.routes.draw do
  # TODO: check if this needs to be scoped to /api later
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope '/api' do
    resources :cryptocurrencies
  end
  scope '/api' do
    devise_for :users
  end
end