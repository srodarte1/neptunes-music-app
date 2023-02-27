class SongSerializer < ActiveModel::Serializer
  attributes :id, :name, :artist, :album, :spotify_id, :preview_url, :image_url
end
