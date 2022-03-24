class Shipment < ApplicationRecord
    belongs_to :carrier
    belongs_to :dispatcher
	@dispatcher_contact_info

    def dispatcher_contact_info(dispatcher_id = rand(1..5))
        @dispatcher_contact_info = {
        dispatcher: "#{self.carrier.dispatchers[dispatcher_id].dispatcher_name}",
        email: "#{self.carrier.dispatchers[dispatcher_id].email}",
        phone_dispatcher_id: "#{self.carrier.dispatchers[dispatcher_id].dispatcher_phone_number}"
    }
    end
end
