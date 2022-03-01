class AddUsersDetails < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :parent_name, :string 
    add_column :users, :child_name, :string 
    add_column :users, :age, :integer 
    add_column :users, :city, :string 
    add_column :users, :zipcode, :integer 
    add_column :users, :distance, :integer
    add_column :users, :type_of_service, :string 
    add_column :users, :image, :string 
  end
end
