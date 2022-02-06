class Business < ApplicationRecord
    has_many :events
    validates :name, presence: true, uniqueness: true

    def self.search(params)
        where("LOWER(name) LIKE ?", "%#{params}%")
      end
end