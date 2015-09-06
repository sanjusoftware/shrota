class Talk < ActiveRecord::Base
  belongs_to :event
  belongs_to :created_by, :class_name => User
  acts_as_taggable
end
