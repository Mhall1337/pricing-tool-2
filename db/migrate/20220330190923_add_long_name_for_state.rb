class AddLongNameForState < ActiveRecord::Migration[7.0]
  def change
    add_column :cities_states, :state_long_name, :string
  end
end
