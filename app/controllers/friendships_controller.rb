class FriendshipsController < ApplicationController

def create 
render json: Friendship.create!(friendship_params), status: 201
end

def destroy 
friend = Friendship.find(params[:id])
if friend.recipient == @current_user || friend.sender== @current_user
    friend.update(status: "rejected")
end
render json: friend, status: 202
end

def friendship_params
    params.permit(:recipient, :sender, :status)
end

end
