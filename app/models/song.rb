class Song < ApplicationRecord
    has_many :playlist_songs, dependent: :destroy
    has_many :playlists, through: :playlist_songs
    # has_one_attached :preview_url
end
