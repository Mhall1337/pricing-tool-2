class CreateDispatchers < ActiveRecord::Migration[7.0]
  def change
    create_table :dispatchers do |t|
      t.string :dispatcher_name
      t.integer :dispatcher_phone_number
      t.string :email
      t.integer :carrier_id

      t.timestamps
    end
  end
end
