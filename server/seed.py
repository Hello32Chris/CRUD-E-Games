from app import app

from models import db, Cart, Customer, Store, Item

from faker import Faker



fake = Faker()


for i in range(5):  # Seed 10 fake users in this example
    customer = Customer(
        name=fake.name(),
        password=fake.password(),
        email=fake.email(),
        age=fake.age(min=14, max=80),
        membership=fake.membership(chance_of_getting_true = 50)
        # You can set other attributes as needed
    )
    db.session.add(customer)
    db.session.commit()

for i in range(5):
    cart = Cart(
        customer_id = fake.customer_id(),
        item_id = fake.item_id() 
    )
    
    db.session.add(cart)
    db.session.commit()

for i in range(10):
    item = Item(
        name = fake.name(),
        type = fake.type(),
        desc = fake.desc(),
        quantity = fake.quantity(min=1, max=5),
        price = fake.price(min=1.0, max=100.0, precision=2),
        store_id = fake.store_id(min=1, max=3)
    )
    db.session.add(item)
    db.session.commit()