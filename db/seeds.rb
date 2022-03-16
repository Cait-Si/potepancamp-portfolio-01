user = User.new(
  name: "test",
  email: "test2@test.com",
  password: 123456,
  password_confirmation: 123456
)
user.save!

3.times do |n|
  habit = Habit.new(
    title: "習慣_#{n}",
    detail: "内容_#{n}",
    active: true,
    user_id: 1
  )

  habit.save!
end
