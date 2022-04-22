class LocationsController < ApplicationController

    def show_nearby_locations
        nearby_locations = Location.near("#{params[:originCity].titleize}, #{params[:originState].upcase} ", params[:miles].to_i)
        shipments = Shipment.where(origin_id: nearby_locations.ids)
        render json: shipments, status: :created, include: [:dispatcher, :carrier, :origin, :destination]
    end

    private
    def permitParams
        params.permit(:id, :miles, :originCity, :originState, :distance)
    end
end
