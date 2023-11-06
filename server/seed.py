from app import app

from models import db, Cart, Customer, Store, Item, Checkout

from random import choice as rc

from faker import Faker

with app.app_context():


    fake = Faker()

    # def create_fake_data():
    #     # Create fake customers
    #     for _ in range(10):
    #         customer = Customer(
    #             name=fake.name(),
    #             password=fake.password(),
    #             email=fake.unique.email(),
    #             age=fake.random_int(min=18, max=65),
    #             membership=fake.boolean(chance_of_getting_true=50),
    #         )
    #         db.session.add(customer)

    #     # Create fake stores
    #     for _ in range(5):
    #         store = Store(
    #             name=fake.company(),
    #             password=fake.password(),
    #             email=fake.unique.email(),
    #             location=fake.address(),
    #             hours=fake.random_int(min=6, max=20),
    #         )
    #         db.session.add(store)

    #     # Create fake items and link them to stores
    #     items = []
    #     for _ in range(20):
    #         item = Item(
    #             name=fake.word(),
    #             type=fake.word(),
    #             description=fake.sentence(),
    #             quantity=fake.random_int(min=1, max=100),
    #             price=fake.random_int(min=1, max=100),
    #             store_id=fake.random_element(elements=Store.query.all()).id,
    #         )
    #         items.append(item)
    #         db.session.add(item)

    #     # Create fake carts and link them to customers and items
    #     carts = []
    #     for _ in range(30):
    #         customer = fake.random_element(elements=Customer.query.all())
    #         cart = Cart(customer=customer)
    #         carts.append(cart)
    #         db.session.add(cart)

    #     # Create fake items and associate them with a cart
    #     items = Item.query.all()  # Retrieve all available items
    #     for _ in range(20):
    #         item = fake.random_element(elements=items)
    #         cart = fake.random_element(elements=Cart.query.all())
    #         cart.items.append(item)  

    #     # Create fake checkouts and link them to carts and stores
    #     for _ in range(15):
    #         cart = fake.random_element(elements=Cart.query.all())
    #         store = fake.random_element(elements=Store.query.all())

    #         checkout = Checkout(cart=cart, store=store)
    #         db.session.add(checkout)

    #     # Commit the changes to the database
    #     db.session.commit()

    # create_fake_data()

    def seed_items(num_items=10):
        for _ in range(num_items):
            store = Store.query.get(fake.random_int(min=1, max=3))  # Replace with the appropriate store ID range
            item = Item(
                name=fake.word(),
                type=fake.word(),
                description=fake.sentence(),
                quantity=fake.random_int(min=1, max=100),
                price=fake.random_int(min=10, max=1000) / 10.0,
                store=store,
            )
        db.session.add(item)

    db.session.commit()

    def seed_carts(num_carts=5):
        for _ in range(num_carts):
            customer = Customer.query.get(fake.random_int(min=1, max=5))  # Replace with the appropriate customer ID range
            cart = Cart(
                customer=customer,
            )
            db.session.add(cart)

        db.session.commit()

    def longer_name(min_length):
        while True:
            name = fake.name()
            if len(name) > min_length:
                return name

    def seed_customers(num_customers=5):
        for _ in range(num_customers):
            customer = Customer(
                name=longer_name(3),
                password=fake.password(),
                email=fake.email(),
                age=fake.random_int(min=13, max=80),
                membership=fake.boolean(),
            )
            db.session.add(customer)

        db.session.commit()

    def seed_stores(num_stores=3):
        for _ in range(num_stores):
            store = Store(
                name=fake.company(),
                password=fake.password(),
                email=fake.email(),
                location=fake.address(),
                hours=fake.random_int(min=1, max=24),
            )
            db.session.add(store)

        db.session.commit()

    def seed_checkouts(num_checkouts=5):
        for _ in range(num_checkouts):
            store = Store.query.get(fake.random_int(min=1, max=3))  # Replace with the appropriate store ID range
            customer = Customer.query.get(fake.random_int(min=1, max=5))  # Replace with the appropriate customer ID range
            cart = Cart(customer=customer)
            db.session.add(cart)
            
            # Associate random items with the cart
            num_items_in_cart = fake.random_int(min=1, max=5)  # You can adjust the number of items in the cart
            for _ in range(num_items_in_cart):
                item = Item.query.get(fake.random_int(min=1, max=10))  # Replace with the appropriate item ID range
                # cart.items.append(item)
            
            checkout = Checkout(
                store=store,
                cart=cart,
            )
            db.session.add(checkout)

        db.session.commit()

    if __name__ == '__main__':
        with app.app_context():
            seed_items(10)  # Create 10 random items
            seed_carts(5)   # Create 5 random carts
            seed_customers(5)  # Create 5 random customers
            seed_stores(3)   # Create 3 random stores
            seed_checkouts(5)  # Create 5 random checkouts

        print('Data has been seeded.')