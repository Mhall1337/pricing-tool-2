class Shipment < ApplicationRecord
  belongs_to :carrier
  belongs_to :dispatcher
  belongs_to :origin, class_name: "Location"
  belongs_to :destination, class_name: "Location"

  after_validation :calculate_rate_and_miles
  
  @@non_unique = []

  def calculate_rate_and_miles
    self.miles = self.origin.distance_to(self.destination)
    self.rate = self.miles * 3.5
  end


  def self.search_shipments(params)
    binding.break
    origin = Location.where("city = ? AND state_abbr = ?", @cities, params[:origin_state].upcase)
    destination = Location.where("city = ? AND state_abbr = ?", params[:destination_city].titleize, params[:destination_state].upcase)
    carrier = Carrier.where("carrier_name = ?", params[:carrier].titleize)
    shipments = Shipment.where("origin_id = ? AND destination_id = ?", origin.ids[0], destination.ids[0])
    shipments
  end

  def self.find_duplicates
    shipments = Shipment.all.map { |e| [e.origin, e.carrier, e.destination] }
    @@non_unique = shipments.select.with_index do |e, i|
      i != shipments.index(e)
    end
  end

  def handle_duplicate
  end
end
