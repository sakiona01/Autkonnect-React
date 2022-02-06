class User < ApplicationRecord
    has_many :reviews
    has_many :reviewed_events, through: :reviews, source: :event

    has_many :rsvps
    has_many :events, through: :rsvps

    validates :username, uniqueness: true, presence: true
    validates :email, presence: true

    has_many :conversations, :foreign_key => :sender_id

    has_secure_password


end