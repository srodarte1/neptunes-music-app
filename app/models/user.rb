class User < ApplicationRecord
    include Rails.application.routes.url_helpers

    has_many :playlists, dependent: :destroy
   
    has_many :sent_friendships_requests, class_name: "Friendship", foreign_key: :sender_id, dependent: :destroy
    has_many :received_friendships_requests, class_name: "Friendship", foreign_key: :recipient_id, dependent: :destroy
    has_secure_password
    has_one_attached :avatar


    validates_presence_of :email, :name
    validates :email, uniqueness: true
    validates :name, uniqueness: true
    validates :password, length: { minimum: 8 }, on: :create


    def avatar_url
        if self.avatar.attached?
          rails_blob_url(self.avatar)
        else
          nil
        end
    end

    def friends
        friendships = Friendship.where(sender: self, status: "accepted").or(Friendship.where(recipient: self,status: "accepted"))
        friendships.map{|f| f.sender === self ? f.recipient : f.sender}
    end
    # def accepted_friends
    #     friendships = Friendship.where(sender: self, status: "accepted").or(Friendship.where(receiver: self, status: "accepted"))
    #     friendships.map{|f| f.sender === self ? f.recipient : f.sender}
    # end
    # def pending_friends
    #     pending = Friendship.where(sender: self, status: "pending").or(Friendship.where(receiver: self, status: "pending"))
    #     pending.map{|f| f.sender === self ? f.receiver : f.sender}
    # end
    # def rejected_friends
    #     rejected = Friendship.where(sender: self, status: "rejected").or(Friendship.where(receiver: self, status: "rejected"))
    #     rejected.map{|f| f.sender === self ? f.receiver : f.sender}
    # end

end
