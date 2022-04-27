class CreateCarrierNotes < ActiveRecord::Migration[7.0]
  def change
    create_table :carrier_notes do |t|
      t.integer :carrier_id
      t.integer :user_id
      t.string :note

      t.timestamps
    end
  end
end
