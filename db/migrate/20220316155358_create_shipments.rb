class CreateShipments < ActiveRecord::Migration[7.0]
  def change
    create_table :shipments do |t|
      t.string "origin_city"
      t.string "origin_state"
      t.string "destination_city"
      t.string "destination_state"
      t.string "commodity"
      t.string "trailer_type"
      t.integer "carrier_id"
      t.integer "miles"
      t.integer "rate"
      t.string "driver_name"
      t.integer "driver_phone_number"
      t.timestamps
    end
  end
end
