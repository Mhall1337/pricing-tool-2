class Shipment < ApplicationRecord
    belongs_to :carrier
	has_one :dispatcher, through: :carrier

    def dispatcher_contact_info dispatcher_id
        self[:dispatcher_info] = {
        dispatcher: "#{self.carrier.dispatchers[dispatcher_id].dispatcher_name}",
        email: "#{self.carrier.dispatchers[dispatcher_id].email}",
        phone_dispatcher_id: "#{self.carrier.dispatchers[dispatcher_id].dispatcher_phone_number}"
    }
    end
end
