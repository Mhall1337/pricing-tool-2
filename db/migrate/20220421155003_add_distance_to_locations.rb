class AddDistanceToLocations < ActiveRecord::Migration[7.0]
  def change
    add_column :locations, :distance, :float
  end
end
