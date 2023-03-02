class Friendship < ApplicationRecord
  belongs_to :recipient, class_name: "User"
  belongs_to :sender, class_name: "User"

  validates :status, inclusion: {in: ["pending", "accepted", "rejected"], message: "%{value} has to be one of pending, accepted, rejected"}

  scope :pending, -> {where("status = ?", "pending")}
  scope :accepted, -> {where("status = ?", "accepted")}
  scope :rejected, -> {where("status = ?", "rejected")}

end