class CreateEventsControllers < ActiveRecord::Migration[6.1]
  def change
    create_table :events_controllers do |t|

      t.timestamps
    end
  end
end
