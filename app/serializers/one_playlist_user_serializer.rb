class OnePlaylistUserSerializer < ActiveModel::Serializer
  attributes :id, :email, :name, :avatar_url # :friends #:playslist_songs
  # has_many :sent_friendships_requests
  # has_many :received_friendships_requests
end
