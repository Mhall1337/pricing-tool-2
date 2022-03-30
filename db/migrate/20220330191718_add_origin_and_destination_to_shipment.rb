class AddOriginAndDestinationToShipment < ActiveRecord::Migration[7.0]
  def change
    add_column :shipments, :origin_id, :integer
    add_column :shipments, :destination_id, :integer
  end
end
