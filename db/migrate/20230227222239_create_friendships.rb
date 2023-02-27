class CreateFriendships < ActiveRecord::Migration[6.1]
  def change
    create_table :friendships do |t|
      t.references :followee, null: false, foreign_key: {to_table: :users}
      t.references :follower, null: false, foreign_key: {to_table: :users}
      t.string :status, default: "pending"

      t.timestamps
    end
  end
end
