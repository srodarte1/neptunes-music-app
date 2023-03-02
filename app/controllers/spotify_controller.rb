# class SpotifyController < ApplicationController
#     def authenticate
#       RSpotify.authenticate(CLIENT_ID, CLIENT_SECRET)
#       redirect_to RSpotify::OAuth.new(:redirect_uri => REDIRECT_URI).authorize_url
#     end
    
#     def callback
#       auth_options = {
#         :redirect_uri => REDIRECT_URI,
#         :code => params[:code]
#       }
    
#       token = RSpotify::OAuth.new(:redirect_uri => REDIRECT_URI).get_token(params[:code], auth_options)
#       current_user.update_attribute(:spotify_token, token.token)
    
#       redirect_to root_path
#     end
    
#     def search
#       @songs = RSpotify::Track.search(params[:q])
    
#       ActiveRecord::Base.transaction do
#         @songs.each do |song|
#           Song.create(name: song.name, artist: song.artists.first.name, spotify_id: song.id)
#         end
#       end
    
#       render json: @songs
#     end
#   end
  