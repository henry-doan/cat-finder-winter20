10.times do
  Cat.create(
    nombre: Faker::Creature::Cat.name,
    age: Faker::Number.between(from: 0, to: 20),
    color: Faker::Color.color_name,
    breed: Faker::Creature::Cat.breed,
    avatar: 'https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=963&q=80',
    user_id: 2
  )
end