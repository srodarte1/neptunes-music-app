class CreateSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :songs do |t|
      t.string :name
      t.string :artist
      t.string :album_name
      t.integer :duration_ms
      t.string :spotify_id
      t.string :preview_url
      t.string :image_url

      t.timestamps
    end
  end
end
