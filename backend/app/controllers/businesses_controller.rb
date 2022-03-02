class BusinessesController < ApplicationController
    

    def index
        if params[:q]
         @businesses = Business.all.search(params[:q].downcase)
        else
        @businesses = Business.all
       end
       render json: @businesses
    end

    def show
        business = Business.find_by_id(params[:id])
        render json: business
    end

    def create
        business = Business.new(business_params)
        if business.save
        session[:business_id] = business.id
        render json: business
        else
            render json: {error: "Bussiness coudln't be created"}, status: :unprocessable_entity
        end
    end

    def update
        business = Business.find_by_id(params[:id])
        if  @current_user.id == business.id
            if business.update(business_params)
                render json: business
            else
                render json: {error: "Cannot update Business Profile"}, status: :unauthorized
            end
        end
    end

    def destroy
        business = Business.find_by_id(params[:id])
        if  @current_user.id == business.id
            if business.destroy
                head :no_content
            else
                render json: {error: "Cannot delete Business Profile"}, status: :unauthorized
            end 
        end 
    end

private 

    def business_params
        params.permit(:name, :address, :owner, :phone, :email, :website, :type_of_service, :username, :password)
    end
end

