class Shipment < ApplicationRecord
    belongs_to :carrier
    belongs_to :dispatcher
    belongs_to :origin, class_name: 'Location'
    belongs_to :destination, class_name: 'Location'
    #@@uni_arr
    @non_uni = []
    

    # def self.unique_shipments
    #    unique = self.all.map{|e| [e.origin.city, e.origin.state_abbr, e.carrier, e.destination.city, e.destination.state_abbr]}
    #    self.all.map.with_index{|shipment, i| shipment if [shipment.origin.city, shipment.origin.state_abbr, shipment.carrier, shipment.destination.city, shipment.destination.state_abbr] == unique[i]}
    # end

    # def self.uni_two
    #     #@@uni_arr = []
    #     # @@non_uni =[]
    #     unique = self.all.map{|e| [e.origin.city, e.origin.state_abbr, e.carrier, e.destination.city, e.destination.state_abbr]}.uniq
    #     self.all.each.with_index do |shipment, i|
    #         if [shipment.origin.city, shipment.origin.state_abbr, shipment.carrier, shipment.destination.city, shipment.destination.state_abbr] == unique[i]
    #           #  @@uni_arr << shipment
    #         else
    #             #@@non_uni << shipment
    #             i+=1
    #         end
    #     end
    # end

    def self.find_duplicates 
        shipments = Shipment.all.map{|e| [e.origin.city, e.origin.state_abbr, e.carrier, e.destination.city, e.destination.state_abbr]}
        @@non_uni = shipments.select.with_index do |e, i|
            i != shipments.index(e)
        end
        
    end
    
    def handle_duplicate
        Shipment.all.select do |e|
            e.origin.city && e.origin.state_abbr && e.carrier && e.destination.city && e.destination.state_abbr == @@non_uni
        end
    end
end
