class RenameCitiesStatesToLocations < ActiveRecord::Migration[7.0]
  def change
    rename_table :cities_states, :locations
  end
end
