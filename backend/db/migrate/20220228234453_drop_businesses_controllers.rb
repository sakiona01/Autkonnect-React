class DropBusinessesControllers < ActiveRecord::Migration[6.1]
  def change
    drop_table :businesses_controllers
  end
end
