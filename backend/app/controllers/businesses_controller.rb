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

    def update
        if @business.update(business_params)
         render json: @business
        else
            render json: {error: "Business not found"}, statsus :not_found 
        end
    end

    def destroy

    end

private 

    def business_params
        params.permit(:name, :address, :owner, :phone, :email, :website, :type_of_service)
    end
end

