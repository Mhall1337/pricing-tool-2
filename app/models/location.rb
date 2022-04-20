class Location < ApplicationRecord
    has_many :shipments
    geocoded_by :address
   # validates :address, uniqueness: true
    after_validation :geocode

     

    def address
        [self.city, self.state_abbr].compact.join(', ')
    end

    def find_nearby_locations miles
        #binding.break
       nearby_locations =  self.nearbys(miles)
       Shipment.where(origin_id: nearby_locations.ids)
    end
    
end
