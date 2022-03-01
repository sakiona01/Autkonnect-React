class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :parent_name, :child_name, :age, :city, :zipcode, :distance, :type_of_service, :image

  has_many :reviews
  has_many :rsvps
  has_many :events

end
