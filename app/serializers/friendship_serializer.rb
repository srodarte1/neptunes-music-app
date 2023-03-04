class FriendshipSerializer < ActiveModel::Serializer
  attributes :id, :status
  has_one :recipient
  has_one :sender
end
