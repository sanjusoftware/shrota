class Talk < ActiveRecord::Base
  extend FriendlyId
  friendly_id :topic, use: [:slugged, :history]

  belongs_to :event
  belongs_to :created_by, :class_name => User
  acts_as_taggable
end
