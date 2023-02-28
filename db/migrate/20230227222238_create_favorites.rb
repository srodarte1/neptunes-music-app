class CreateFavorites < ActiveRecord::Migration[6.1]
  def change
    create_table :favorites do |t|
      t.references :user, null: false, foreign_key: true
      t.references :favorite_song, null: false, foreign_key: {to_table: :song}
      t.references :favorite_playlist, null: false, foreign_key: {to_table: :playlist}

      t.timestamps
    end
  end
end
