class ShipmentsController < ApplicationController
    before_action :force_json, only: :searc
    def index
        shipments = Shipment.all
        render json: shipments, include: [:dispatcher, :carrier, :origin, :destination]
    end
    def search

        render json: Location.all
    end


    private
    def permitParams
        params.permit(:origin_city, :origin_state, :destination_city, :destination_state, :carrier)
    end
    def force_json
        request.format = :json
      end
end
