class BusinessSerializer < ActiveModel::Serializer

  attributes :id, :name, :address, :owner, :phone, :email, :website, :type_of_service

  has_many :events
 

end
