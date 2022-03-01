class RsvpsController < ApplicationController
    #before_action :redirect_if_not_logged_in
    
    def new
        if @event = Event.find_by_id(params[:event_id])
        @event = @event.rsvps.build
        else
            @rsvp = Rsvp.new
        end
    end
  
    def create
        @rsvp = current_user.rsvps.build(rsvp_params)
        if @rsvp.save
        #redirect_to rsvp_path(@rsvp)
        else
          render :new
        end
    end
  
    def show
        @rsvp = Rsvp.find_by_id(params[:id])
    end
  
  
    def index
        if @event = Event.find_by_id(params[:event_id])
            @rsvps = @event.rsvps
        else
        @rsvps = Rsvp.all
    end
  end
    private
  
    def rsvp_params
        params.require(:rsvp). permit(:event_id, :user_id)
    end
  end
  
  