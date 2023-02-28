class Song < ApplicationRecord
    has_many :playlist_songs, dependent: :destroy
    has_many :playlists, through: :playlist_songs
    has_many :favorites, dependent: :destroy
    has_many :favorited_by_users, through: :favorites, source: :user
end
