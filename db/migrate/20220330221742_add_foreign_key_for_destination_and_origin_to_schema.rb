class AddForeignKeyForDestinationAndOriginToSchema < ActiveRecord::Migration[7.0]
  def change
    add_foreign_key :shipments, :cities_states, column: :origin_id
    add_foreign_key :shipments, :cities_states, column: :destination_id
  end
end
