class SessionsController < ApplicationController
  
    def welcome
    end

    def about
    end

    def shop 
    end
    
    def destroy
        session.delete(:user_id)
        redirect_to '/'
    end
    
    def new
    end

    def create
        @user = User.find_by(username: params[:user][:username])
        if @user && @user.authenticate(params[:user][:password])
          session[:user_id] = @user.id
          redirect_to user_path(@user)
        else
          flash[:error] = "Sorry, your username or password was incorrect"
          redirect_to '/login'
        end
      end


    private 

     
end
