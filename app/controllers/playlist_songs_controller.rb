class PlaylistSongsController < ApplicationController
  #create and destroy

    def create
        render json: PlaylistSong.create!(playlist_params), status: :created
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
    params.permit(:playlist, :song)
    end
end


