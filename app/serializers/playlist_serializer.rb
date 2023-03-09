class PlaylistSerializer < ActiveModel::Serializer
  attributes :id, :name
  # has_one :user, serializer: OnePlaylistUserSerializer
  has_many :songs
end
