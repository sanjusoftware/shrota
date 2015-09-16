class Talk < ActiveRecord::Base
  extend FriendlyId
  friendly_id :topic, use: [:slugged, :history, :finders]

  belongs_to :event
  belongs_to :created_by, :class_name => User
  acts_as_taggable

  def yet_to_start?
    Time.zone.now < starts_at.localtime
  end

  def ends_at
    starts_at.localtime + (duration * 60)
  end

  def ended?
    Time.zone.now > ends_at
  end

  def started?
    Time.zone.now > starts_at.localtime && Time.zone.now < ends_at
  end

end
