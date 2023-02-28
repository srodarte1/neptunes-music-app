class Playlist < ApplicationRecord
  belongs_to :creator, class_name: "User"
  has_many :favorites, dependent: :destroy
  has_many :favorited_by_users, through: :favorites, source: :user
  has_many :playlist_songs, dependent: :destroy
  has_many :songs, through: :playlist_songs
end
