class Habit < ApplicationRecord
  belongs_to :user
  validates :title, :detail, :count, presence: true
  validates :title, length: { maximum: 20 }
  validates :count, numericality: { greater_than_or_equal_to: 0 }

  scope :active, -> { where(active: true) }
end
