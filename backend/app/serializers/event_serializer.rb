class EventSerializer < ActiveModel::Serializer
  
  attributes :id, :description, :name

  belongs_to :business

  has_many :reviews
  has_many :rsvps
  
end
