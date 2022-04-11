class ShipmentsController < ApplicationController
  def index
    shipments = Shipment.all
    render json: shipments, include: [:dispatcher, :carrier, :origin, :destination]
  end

  def search(origin_city: params[:origin_city], origin_state: params[:origin_state], destination_city: params[:destination_city], destination_state: params[:destination_state], carrier: params[:carrier])

    origin = Location.where("city = ? AND state_abbr = ?", params[:origin_city], params[:origin_state])
    destination = Location.where("city = ? AND state_abbr = ?", params[:destination_city], params[:destination_state])
    carrier = Carrier.where("carrier_name = ?", params[:carrier])
    shipments = Shipment.where("origin_id = ? AND destination_id = ?", origin.ids[0], destination.ids[0])

    render json: shipments
    
  end

  private

  def permitParams
    params.permit(:origin_city, :origin_state, :destination_city, :destination_state, :carrier)
  end
end
