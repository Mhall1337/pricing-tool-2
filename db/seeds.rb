# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Carrier.create(carrier_name: 'Landstar')
Carrier.create(carrier_name: "PS Logistics")
Carrier.create(carrier_name: "MTB")


Dispatcher.create(dispatcher_name: 'bill', dispatcher_phone_number: 18008111, email:'bill@aol.com', carrier_id: 1)
Dispatcher.create(dispatcher_name: 'jan', dispatcher_phone_number: 9834795, email:'jan@aol.com', carrier_id: 2)
Dispatcher.create(dispatcher_name: 'carol', dispatcher_phone_number: 98734905, email:'carol@aol.com', carrier_id: 2)
Dispatcher.create(dispatcher_name: 'chip', dispatcher_phone_number: 235364, email:'chip@mtb.com', carrier_id: 3)
Dispatcher.create(dispatcher_name: 'pete', dispatcher_phone_number: 6234623, email:'pete@mtb.com', carrier_id: 3)

Shipment.create(origin_city: 'chicago', origin_state: 'IL', destination_city: 'houston', destination_state: 'TX', commodity:'steel', trailer_type:'FB', carrier_id:1, miles: 750, rate: 3000, driver_name:'billy bob', driver_phone_number: 489287 )

50.times do
    carrier = Carrier.create(carrier_name: Faker::Company.name)
    5.times do
      carrier.dispatchers.create(dispatcher_name: Faker::Name.name, dispatcher_phone_number: Faker::PhoneNumber.phone_number, email: Faker::Internet.email, carrier_id: carrier.id)
    end
end


  10.times do
    ship =Shipment.create(origin_city: Faker::Address.city, origin_state: Faker::Address.state_abbr, destination_city: Faker::Address.city, destination_state: Faker::Address.state_abbr, commodity: Faker::Commerce.material, trailer_type: "FB", carrier_id: rand(1..50), miles: rand(1..1000), rate: rand(1..4000), driver_name: Faker::Name.name, driver_phone_number: Faker::PhoneNumber.phone_number)
  end