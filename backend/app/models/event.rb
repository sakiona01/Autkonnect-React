class Event < ApplicationRecord
    belongs_to :business
    belongs_to :user
    has_many :reviews
    has_many :users, through: :reviews
    has_many :rsvps
    has_many :users, through: :rsvps
  
    validates :name, presence: true
    validate :not_a_repeat
  
    def self.alpha
      order(:name)
    end
  
    def business_attributes=(attributes)
      self.business = Business.find_or_create_by(attributes) if !attributes['name'].empty?
      self.business
    end
  
    def not_a_repeat
      event = Event.find_by(name: name, business_id: business_id)
      if !!event && event != self
        errors.add(:title, 'already exists for that event')
      end
    end
  
    def event_name
      event.try(:name)
    end
  
    def name_and_business
      "#{name} - #{business.try(:name)}" 
    end
  
    def self.search(params)
      where("LOWER(title) LIKE ?", "%#{params}%")
    end
    
  end