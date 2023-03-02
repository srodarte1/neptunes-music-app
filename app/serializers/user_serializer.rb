class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password_digest, :name, :avatar, :friends
  has_many :sent_friendships_requests
  has_many :received_friendships_requests
end
