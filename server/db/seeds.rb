# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
Article.destroy_all
User.destroy_all

5.times do 
  user = User.create(
    email: Faker::Internet.email,
    password: 'azerty'  # Vous pouvez changer le mot de passe si nécessaire
  )

  # Créer quelques articles pour chaque utilisateur
  5.times do
    user.articles.create(
      title: Faker::Lorem.sentence,
      content: Faker::Lorem.paragraph
    )
  end
end