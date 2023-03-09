class UserSerializer < ActiveModel::Serializer
  # attributes :id, :email, :password_digest, :name, :avatar_url, :friends
  attributes :id, :email, :name, :avatar_url #:friends #:playslist_songs
  # has_many :sent_friendships_requests
  # has_many :received_friendships_requests
  has_many :playlists

  # def playlist_songs
  #   self.object.playlists.map(&:playlist_songs)
  # end
  
    
  
end
