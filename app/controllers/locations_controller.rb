class LocationsController < ApplicationController

    def show_nearby_locations
        
        #location = Location.where("city = ? AND state_abbr = ?", params[:originCity], params[:originState])
        #binding.break
        nearby_locations = Location.near("#{params[:originCity]}, #{params[:originState]} ", params[:miles].to_i)
        shipments = Shipment.where(origin_id: nearby_locations.ids)
        render json: shipments, status: :created
    end

    private
    def permitParams
        params.permit(:id, :miles, :originCity, :originState)
    end
end
