class CarrierNote < ApplicationRecord
    belongs_to :user
    belongs_to :carrier
    validates :note, presence: true
    validates :note, length: {minimum: 5}
    validates :carrier, presence: true
    validates_associated :carrier

end
