class RenameStatesTableToCitiesStates < ActiveRecord::Migration[7.0]
  def change
    rename_table :states, :cities_states
  end
end
