class AddStateIdToCity < ActiveRecord::Migration[7.0]
  def change
    add_column :cities, :state_id, :integer
  end
end
