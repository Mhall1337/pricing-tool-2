class Carrier < ApplicationRecord
    has_many :dispatchers
    has_many :carrier_notes
end
