class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password_digest, :name, :avatar_url, :friends
  has_many :sent_friendships_requests
  has_many :received_friendships_requests

  class UserSerializer < ActiveModel::Serializer
    attributes :id, :name, :email, :avatar_url
  
    def avatar_url
      if object.avatar.attached?
        rails_blob_path(object.avatar, only_path: true)
      else
        nil
      end
    end
  end
  
end
