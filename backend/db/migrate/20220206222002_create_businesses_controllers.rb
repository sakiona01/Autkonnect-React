class CreateBusinessesControllers < ActiveRecord::Migration[6.1]
  def change
    create_table :businesses_controllers do |t|

      t.timestamps
    end
  end
end
