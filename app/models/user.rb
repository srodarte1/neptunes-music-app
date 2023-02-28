class User < ApplicationRecord
    has_many :playlists, foreign_key: :creator_id, dependent: :destroy
    has_many :favorites, dependent: :destroy
    has_many :favorite_songs, through: :favorites, source: :favorite_song
    has_many :favorite_playlists, through: :favorites, source: :favorite_playlist
    has_many :followee_friendships, class_name: "Friendship", foreign_key: :followee_id, dependent: :destroy
    has_many :follower_friendships, class_name: "Friendship", foreign_key: :follower_id, dependent: :destroy
    has_many :followees, through: :follower_friendships
    has_many :followers, through: :followee_friendships
    has_secure_password
    has_one_attached :avatar
end
