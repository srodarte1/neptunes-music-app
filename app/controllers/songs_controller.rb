class SongsController < ApplicationController
    #only index and show
    Skip to content
Search or jump to…
Pull requests
Issues
Codespaces
Marketplace
Explore
 
@srodarte1 
We are having a problem billing your account. Please enter a new payment method or check with your payment provider for details on why the transaction failed. You can downgrade to GitHub Free in your Billing settings.
You can always contact support with any questions.
Saekit
/
Mod-4-Project-Music-App
Public
Fork your own copy of Saekit/Mod-4-Project-Music-App
Code
Issues
Pull requests
Actions
Projects
Security
Insights
Beta Try the new code view
Mod-4-Project-Music-App/mod-4-proj-music-api/app/controllers/api/v1/tracks_controller.rb /
@Saekit
Saekit fixed auth issue with tracks
Latest commit 0648855 on Jan 21, 2019
 History
 1 contributor
39 lines (32 sloc)  943 Bytes

class Api::V1::TracksController < ApplicationController
  def index
    @tracks = Track.all

    render json: @tracks
  end

  def top_100
    # byebug
    # top 100 playlist for 2019 tracks
    # https://open.spotify.com/playlist/2kpoUUJ5a4Cw3feTkFJhZ2
    s_tracks = RSpotify::Playlist.find("1276640268","2kpoUUJ5a4Cw3feTkFJhZ2").tracks
    @tracks = s_tracks.map do |s_track|
      Track.new_from_spotify_track(s_track)
    end

    render json: @tracks
  end

  def random
    # byebug
    # random playlist from spotify's featured playlists endpoint's tracks
    s_tracks = RSpotify::Playlist.browse_featured.first.tracks
    @tracks = s_tracks.map do |s_track|
      Track.new_from_spotify_track(s_track)
    end

    render json: @tracks
  end

  def search
    s_tracks = RSpotify::Track.search(params[:q])
    @tracks = s_tracks.map do |s_track|
      Track.new_from_spotify_track(s_track)
    end

    render json: @tracks
  end
end

end
