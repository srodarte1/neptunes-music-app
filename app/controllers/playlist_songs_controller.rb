class PlaylistSongsController < ApplicationController
  #create and destroy

    def create
        # byebug
        song = Song.find_or_create_by(name: params[:name], artist: params[:artist]) do |song|
            song.duration_ms = params[:duration_ms]
            song.image_url = params[:image_url]
            song.preview_url = params[:preview_url]
            song.album_name = params[:album_name]
            song.spotify_id = params[:spotify_id]
        end
        params[:song_id] = song.id
        params[:playlist_id] = @user.playlists.first.id
         ps=  PlaylistSong.find_by(song_id: song.id, playlist_id: @user.playlists.first.id)
        if !ps 
        render json: PlaylistSong.create!(playlist_song_params), status: :created
        else render json: ps, status: 200
        end
    end

    def destroy 
        @playlist_song.destroy
        head :no_content
    end

    private


    def find_playlist_song
    @playlist_song = PlaylistSong.find(params[:id])
    end
    
    def playlist_song_params 
    params.permit(:playlist_id, :song_id)
    end
end


