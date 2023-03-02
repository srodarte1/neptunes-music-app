class CreateFriendships < ActiveRecord::Migration[6.1]
  def change
    create_table :friendships do |t|
      t.references :recipient, null: false, foreign_key: {to_table: :users}
      t.references :sender, null: false, foreign_key: {to_table: :users}
      t.string :status, default: "pending"

      t.timestamps
    end
  end
end
