class CreateCarriers < ActiveRecord::Migration[7.0]
  def change
    create_table :carriers do |t|
      t.string :carrier_name

      t.timestamps
    end
  end
end
