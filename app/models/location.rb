class Location < ApplicationRecord
    has_many :shipments
    geocoded_by :address
    after_validation :geocode

    def address
        [self.city, self.state_abbr].compact.join(', ')
    end

    
end
