class BusinessSerializer < ActiveModel::Serializer

  attributes :id, :name

  belongs_to :user
  has_many :events
  has_many :reviews

end
