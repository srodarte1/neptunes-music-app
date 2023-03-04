class FriendshipsController < ApplicationController

def create 
    render json: Friendship.create!(friendship_params), status: 201
end

def destroy 
    friend = Friendship.find(params[:id])
    if friend.recipient_id == @current_user.id || friend.sender_id == @current_user.id
      friend.update(status: "rejected")
    end
    render json: {}, status: 204
  end
  

def friendship_params
    params.permit(:recipient, :sender, :status)
end

end
