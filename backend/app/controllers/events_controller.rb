class EventsController < ApplicationController
    before_action :set_event, only:[:show, :edit, :update]
    #before_action :redirect_if_not_logged_in
    
    def new
       @event = Event.new
       @event.build_business
    end

    def create  
        @event = Event.new(event_params)
        @event.user_id = session[:user_id]
         if @event.save
        #redirect_to events_path
        else
        @event.build_business 
        render :new
    end
  end

  def index
    if params[:q]
     @events = Event.all.search(params[:q].downcase)
    else
    @events = Event.all
   end
   render json: @events
end

   def show
    @event = Event.find(params[:id])
   end

   def edit
   end

   def update
    if @event.update(event_params)
      #redirect_to event_path(@event)
    else
        render :edit
    end 
   end


    private

    def event_params
        params.require(:event).permit(:name, :description, :business_id, business_attributes: [:name])
    end

    def set_event
        @event = Event.find_by(params[:id])
        redirect_to events_path if !@event
    end
end
