class ShipmentsController < ApplicationController
    def index
        shipments = Shipment.all
        render json: shipments
    end
end
