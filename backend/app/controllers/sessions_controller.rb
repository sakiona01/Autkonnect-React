class SessionsController < ApplicationController
  skip_before_action :confirm_authentication, only: [:create]

    def me
      if current_user
        render json: @current_user, status: :ok
      else
        render json: {error: "You're not logged in"}, status: :unauthorized
      end
    end
    

    def create
        user = User.find_by(username: params[:username])
        business_user = Business.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
          session[:user_id] = user.id
         render json: user, status: :created
        elsif business_user && business_user.authenticate(params[:password])
          session[:business_id] = business_user.id
          render json: business_user, status: :created
        else
          flash[:error] = "Sorry, your username or password was incorrect"
        
        end
      end

      def destroy
        session.delete(:user_id)
        head :no_content
    end

    private 

     
end
