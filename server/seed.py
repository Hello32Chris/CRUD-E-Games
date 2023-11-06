from app import app

from models import db, Cart, Customer, Store, Item

from random import choice as rc

from faker import Faker

with app.app_context():

    fake = Faker()

# def seed_data():
#     with app.app_context():
#         for i in range(5): 
#             customer = Customer(
#                 name=fake.name(),
#                 password=fake.password(),
#                 email=fake.email(),
#                 age=fake.random_int(min=5, max=80),
#                 membership=fake.boolean(chance_of_getting_true = 50)
#                 # You can set other attributes as needed
#             )
#             db.session.add(customer)
#             db.session.commit()

# for i in range(5):
#     cart = Cart(
#         customer_id = fake.customer_id(),
#         item_id = fake.item_id() 
#     )
    
#     db.session.add(cart)
#     db.session.commit()

# for i in range(10):
#     item = Item(
#         name = fake.name(),
#         type = fake.type(),
#         desc = fake.desc(),
#         quantity = fake.quantity(min=1, max=5),
#         price = fake.price(min=1.0, max=100.0, precision=2),
#         store_id = fake.store_id(min=1, max=3)
#     )
#     db.session.add(item)
#     db.session.commit()

# for i in range(3):
#     store = Store(
#         name = fake.name(),
#         password = fake.password(),
#         email = fake.email(),
#         location = fake.location(),
#         hours = fake.hours(min=0, max=24)
#     )
#     db.session.add(store)
#     db.session.commit()