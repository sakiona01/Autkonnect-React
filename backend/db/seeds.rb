katie = User.create(username: "katie", password: "katiecat", email: "katie@cat.com")

shop = Business.create(name: "Coffee Shop")

coffee = Event.create(name: "Coffee Social", description: "Event at the coffee shop in London, UK.", business_id: shop.id, user_id: katie.id)

cr = Review.create(stars: 5, content: "What a great event!", event_id: coffee.id, user_id: katie.id)
