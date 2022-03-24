class RemoveCityAndStateFromShipment < ActiveRecord::Migration[7.0]
  def change 
    change_table (:shipments) do |t|
    t.remove :origin_city
    t.remove :origin_state
    t.remove :destination_city
    t.remove :destination_state
    end
  end
end
