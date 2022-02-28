class DropEventsControllersConversationsControllers < ActiveRecord::Migration[6.1]
  def change
    drop_table :events_controllers
    drop_table :conversations_controllers
  end
end
