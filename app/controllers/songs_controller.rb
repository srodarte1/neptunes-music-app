class SongsController < ApplicationController
    #only index and show
 before_action :find_song, only: [:show]
  def index
   render json: Song.all, status: :ok
  end

  def show 
    render json: @song, status: :ok
  end
#   def top_100
#     # byebug
#     # top 100 playlist for 2019 tracks
#     # https://open.spotify.com/playlist/2kpoUUJ5a4Cw3feTkFJhZ2
#     s_tracks = RSpotify::Playlist.find("1276640268","2kpoUUJ5a4Cw3feTkFJhZ2").tracks
#     @tracks = s_tracks.map do |s_track|
#       Track.new_from_spotify_track(s_track)
#     end

#     render json: @tracks
#   end

#   def random
#     # byebug
#     # random playlist from spotify's featured playlists endpoint's tracks
#     s_tracks = RSpotify::Playlist.browse_featured.first.tracks
#     @tracks = s_tracks.map do |s_track|
#       Track.new_from_spotify_track(s_track)
#     end

#     render json: @tracks
#   end

#   def search
#     s_tracks = RSpotify::Track.search(params[:q])
#     @tracks = s_tracks.map do |s_track|
#       Track.new_from_spotify_track(s_track)
#     end

#     render json: @tracks
#   end
# end
private 

 def find_song
    @song= Song.find(params[:id])
 end

end
