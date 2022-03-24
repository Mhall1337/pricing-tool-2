class AddDispatcherInfo < ActiveRecord::Migration[7.0]
  def change
    add_column :shipments, :dispatcher_id, :integer
  end
end
