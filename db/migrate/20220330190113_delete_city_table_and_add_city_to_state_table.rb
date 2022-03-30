class DeleteCityTableAndAddCityToStateTable < ActiveRecord::Migration[7.0]
  def change
    add_column :states, :city, :string
    drop_table :cities
  end
end
