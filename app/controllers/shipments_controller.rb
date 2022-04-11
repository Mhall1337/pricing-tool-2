class ShipmentsController < ApplicationController
  def index
    shipments = Shipment.all
    render json: shipments, include: [:dispatcher, :carrier, :origin, :destination]
  end

  def search
    binding.break
  end

  private

  def permitParams
    params.permit(:origin_city, :origin_state, :destination_city, :destination_state, :carrier)
  end
end
