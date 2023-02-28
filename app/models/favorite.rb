class Favorite < ApplicationRecord
  belongs_to :user
  belongs_to :favorite_song, class_name: "Song"
  belongs_to :favorite_playlist, class_name: "Playlist"
end
