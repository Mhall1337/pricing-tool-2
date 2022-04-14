class Shipment < ApplicationRecord
  belongs_to :carrier
  belongs_to :dispatcher
  belongs_to :origin, class_name: "Location"
  belongs_to :destination, class_name: "Location"
 
  @non_unique = []

  
  def self.search_shipments(params)
    origin = Location.where("city = ? AND state_abbr = ?", params[:origin_city].titleize, params[:origin_state].upcase)
    destination = Location.where("city = ? AND state_abbr = ?", params[:destination_city].titleize, params[:destination_state].upcase)
    carrier = Carrier.where("carrier_name = ?", params[:carrier].titleize)
    shipments = Shipment.where("origin_id = ? AND destination_id = ?", origin.ids[0], destination.ids[0])
    binding.break
    shipments
  end

  def self.find_duplicates
    shipments = Shipment.all.map { |e| [e.origin, e.carrier, e.destination] }
    @@non_unique = shipments.select.with_index do |e, i|
      i != shipments.index(e)
    end
  end

  def handle_duplicate
    Shipment.all.select do |e|
      e.origin.city && e.origin.state_abbr && e.carrier && e.destination.city && e.destination.state_abbr == @@non_uni
    end
  end
end
