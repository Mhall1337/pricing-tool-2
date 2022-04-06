class Shipment < ApplicationRecord
    belongs_to :carrier
    belongs_to :dispatcher
    belongs_to :origin, class_name: 'Location'
    belongs_to :destination, class_name: 'Location'

    def self.searchedShipments()
        self.all.select{|e| }
    end
end
