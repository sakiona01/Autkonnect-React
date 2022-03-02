class ApplicationController < ActionController::API
    include ActionController::Cookies
    before_action :confirm_authentication
    helper_method :current_user, :logged_in?

    
    def logged_in?
        !!session[:user_id]
    end

    def current_user
        if  User.find_by_id(session[:user_id])
            @current_user = User.find_by_id(session[:user_id])
        elsif Business.find_by_id(session[:business_id])
            @current_user = Business.find_by_id(session[:business_id])
        end
    end

    def confirm_authentication
        render json: { error: "Please log in" }, status: :unauthorized unless current_user
      end

end
