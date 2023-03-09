class SongSerializer < ActiveModel::Serializer
  attributes :id, :name, :artist, :album_name, :spotify_id, :preview_url, :image_url
end
