class SessionsController < ApplicationController
    # skip_before_action :authorized_user, only: [:login]
        def login
            user = User.find_by(email:params[:email])
                if user&.authenticate(params[:password])
                    session[:user_id] = user.id
                  #You can place a byebug here & check “session” in console
                    render json: user, status: :ok
                else
                    render json: {error: "Invalid Credentials"}, status: :unauthorized
                end
        end
        def logout
            session.delete :user_id
            head :no_content
        end
    end