class User < ApplicationRecord
	# Il faut ajouter les deux modules commençant par jwt
	devise :database_authenticatable, :registerable,
        :recoverable, :rememberable, :validatable, :jwt_authenticatable,
        jwt_revocation_strategy: JwtDenylist
  validates :email, presence: true
  validates :first_name, presence: true
  validates :last_name, presence: true
  has_many :articles
  
  def full_name
    "#{first_name} #{last_name}"
  end

end
