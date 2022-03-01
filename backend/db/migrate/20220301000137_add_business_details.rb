class AddBusinessDetails < ActiveRecord::Migration[6.1]
  def change
    add_column :businesses, :address, :string 
    add_column :businesses, :owner, :string 
    add_column :businesses, :phone, :string 
    add_column :businesses, :email, :string 
    add_column :businesses, :website, :string 
    add_column :businesses, :type_of_service, :string 

  end
end
