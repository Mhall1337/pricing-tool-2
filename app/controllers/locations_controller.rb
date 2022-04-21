class LocationsController < ApplicationController

    def show_nearby_locations
        nearby_locations = Location.near("#{params[:originCity]}, #{params[:originState]} ", params[:miles].to_i)
        shipments = Shipment.where(origin_id: nearby_locations.ids)
        render json: shipments, status: :created
    end

    private
    def permitParams
        params.permit(:id, :miles, :originCity, :originState, :distance)
    end
end
