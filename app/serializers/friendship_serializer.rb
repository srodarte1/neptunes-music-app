class FriendshipSerializer < ActiveModel::Serializer
  attributes :id, :status
  has_one :followee
  has_one :follower
end
