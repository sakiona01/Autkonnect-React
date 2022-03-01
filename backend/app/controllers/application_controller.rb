class ApplicationController < ActionController::API
    include ActionController::Cookies
    helper_method :current_user, :logged_in?

    

    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count] }
    end

    private

    def logged_in?
        !!session[:user_id]
    end

    def current_user
        @current_user ||= User.find_by_id(session[:user_id]) if session[:user_id]
    end


   # def redirect_if_not_logged_in
        #redirect_to login_path if !logged_in?
    #end

end
