class User < ApplicationRecord
    has_many :playlists, dependent: :destroy
   
    # has_many :sent_friendships_requests, class_name: "Friendship", foreign_key: :sender_id, dependent: :destroy
    # has_many :received_friendships_requests, class_name: "Friendship", foreign_key: :recipient_id, dependent: :destroy
    has_secure_password
    # has_one_attached :avatar

    # validates_presence_of :email, :name
    # validates :email, uniqueness: true
    # validates :name, uniqueness: true
    # validates :password, length: { minimum: 8 }, on: :create


    # def friends
    #     friendships = Friendship.where(sender: self, status: "accepted").or(Friendship.where(recipient: self,status: "accepted"))
    #     friendships.map{|f| f.sender === self ? f.recipient : f.sender}
    # end

end
