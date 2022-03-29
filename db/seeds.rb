# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

10.times do
  carrier = Carrier.create(carrier_name: Faker::Company.name)
  5.times do
    carrier.dispatchers.create(dispatcher_name: Faker::Name.name, dispatcher_phone_number: Faker::PhoneNumber.phone_number, email: Faker::Internet.email, carrier_id: carrier.id)
  end
end

20.times do
  Shipment.create(commodity: Faker::Commerce.material, trailer_type: "FB", carrier_id: rand(1..10), miles: rand(1..1000), rate: rand(1..4000), driver_name: Faker::Name.name, driver_phone_number: Faker::PhoneNumber.phone_number, dispatcher_id: Dispatcher.ids.sample)
end
