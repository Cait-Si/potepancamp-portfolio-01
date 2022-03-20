FactoryBot.define do
  factory :habit do
    title { '習慣_test' }
    detail { '内容_test' }
    active { true }
    user
  end
end
