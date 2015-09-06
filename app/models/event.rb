class Event < ActiveRecord::Base
  belongs_to :user
  has_many :talks
  mount_uploader :image, ImageUploader

  acts_as_taggable

  geocoded_by :address
  reverse_geocoded_by :lat, :lng

  after_validation :reverse_geocode, if: ->(obj){ (obj.lat.present? and obj.lat_changed?) or  (obj.lng.present? and obj.lng_changed?)}
  after_validation :geocode, if: ->(obj){ obj.address.present? and obj.address_changed? }
end
