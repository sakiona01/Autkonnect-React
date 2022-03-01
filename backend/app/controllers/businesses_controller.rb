class BusinessesController < ApplicationController
    #before_action :redirect_if_not_logged_in 

    def index
        if params[:q]
         @businesses = Business.all.search(params[:q].downcase)
        else
        @businesses = Business.all
       end
       render json: @businesses
    end

    def show
        @business = Business.find_by_id(params[:id])
    end

    def create
        @business = Business.new(business_params)
        if @business.save
        session[:business_id] = @business.id
        else
        render :new
    end

private 

    def business_params
        params.require(:business).permit(:name, :id)
    end
end

