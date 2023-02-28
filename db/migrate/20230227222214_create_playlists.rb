class CreatePlaylists < ActiveRecord::Migration[6.1]
  def change
    create_table :playlists do |t|
      t.string :name
      t.references :creator, null: false, foreign_key: {to_table: :user}

      t.timestamps
    end
  end
end
