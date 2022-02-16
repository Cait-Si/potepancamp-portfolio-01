3.times do |n|
  habit = Habit.new(
    title: "習慣_#{n}",
    detail: "内容_#{n}",
    active: true,
    user_id: 1
  )

  habit.save!
end
