class LocationsController < ApplicationController
    def show_nearby_locations
        location = Location.find_by(id: params[:id])
        nearbys = location.find_nearby_locations(params[:miles])
        render json: locations
    end

    private
    def permitParams
        params.permit(:id, :miles)
    end
end
