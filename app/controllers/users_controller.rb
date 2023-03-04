class UsersController < ApplicationController
    before_action :find_user, only: [ :update, :destroy ]
    skip_before_action :authorized_user, only: [:create]
  
    # GET /users
    def index
      render json: User.all, status: :ok
    end
  
    # GET /users/1
    def show
      render json: @user, status: :ok
    end
  
    # POST /users
    def create
      new_user = User.create!(user_params)
      session[:user_id] = new_user.id
      render json: new_user, status: :created
    end
  
    # PATCH/PUT /users/1
    def update
      @user.update!(user_params)
      render json: {user: @user}, status: :accepted
    end
  
    # DELETE /users/1
    def destroy
      @user.destroy
      head :no_content
    end
  
  private
      # Use callbacks to share common setup or constraints between actions.
  def find_user
    @user = User.find(params[:id])
  end
  
      # Only allow a list of trusted parameters through.
  def user_params
    params.permit(:email, :password, :name, :avatar)
  end
end
 