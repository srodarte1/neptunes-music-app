class PlaylistsController < ApplicationController
#full crud
before_action :find_playlist, only: [:show, :destroy, :update]


    def index 
        playlists = Playlist.all
        render json: playlists , status: :ok
    end
  
    # def index
    #     user = User.find(params[:userId])
    #     playlists = user.playlists
    #     render json: playlists
    #   end

    def show 
        render json: @playlist, status: :ok
    end

    def create
        # byebug
        playlist =  Playlist.create!(playlist_params)
        render json: playlist, status: :created
    end

    def update 
        @playlist.update!(playlist_params)
        render json: @playlist, status: :accepted
  
    end

    def destroy 
        @playlist.destroy
        head :no_content    
    end

    private 

    def find_playlist
        @playlist = Playlist.find(params[:id])
      end
      

    def playlist_params 
        params.permit(:name, :user_id)
      end
      


end
