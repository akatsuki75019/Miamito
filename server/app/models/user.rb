class User < ApplicationRecord
	# Il faut ajouter les deux modules commençant par jwt
	devise :database_authenticatable, :registerable,
        :recoverable, :rememberable, :validatable, :jwt_authenticatable,
        jwt_revocation_strategy: JwtDenylist
  validates :email, presence: true
  has_many :articles
  has_many :favorite_recipes
  has_many :recipes, through: :favorite_recipes
  has_many :shopping_lists
  has_many :ingredients, through: :shopping_lists
  def full_name
    "#{first_name} #{last_name}"
  end

end
