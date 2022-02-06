class CreateConversationsControllers < ActiveRecord::Migration[6.1]
  def change
    create_table :conversations_controllers do |t|

      t.timestamps
    end
  end
end
