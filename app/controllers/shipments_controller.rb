class ShipmentsController < ApplicationController
    def index
        shipments = Shipment.all
        render json: shipments, include: [:dispatcher, :carrier, :origin, :destination]
    end
end
