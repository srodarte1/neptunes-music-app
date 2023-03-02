class PlaylistsController < ApplicationController
#full crud
before action :find_playlist, only: [:show, :destroy]

def index 
    render json: Playlist.all, status: :ok
  end
  

def show 
render json: @playlist, status: :ok
end

def create
render json: Playlist.create!(playlist_params), status: :created
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
params.permit(:name, :creator)
end


end
