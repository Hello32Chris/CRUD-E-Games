from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from faker import Faker

metadata = MetaData(
    naming_convention={
        "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    }
)

db = SQLAlchemy(metadata=metadata)

class Item(db.Model, SerializerMixin):
    __tablename__ = 'items'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String)
    type = db.Column(db.String)
    desc = db.Column(db.String)
    quantity = db.Column(db.Integer)
    price = db.Column(db.Float)
    store_id = db.Column(db.Integer, db.ForeignKey('stores.id'))

    # relationships
    cart = db.relationship('Cart', back_populates = 'items')
    store = db.realtionship('Store', back_populates = 'items')

    def __repr__(self):
        return f''


class Cart(db.Model, SerializerMixin):
    __tablename__ = 'carts'


    id = db.Column(db.Integer, primary_key = True)
    customer_id = db.Column(db.Integer, db.ForeignKey('customers.id'))
    item_id = db.Column(db.Integer, db.ForeignKey('items.id'))

    # relationships
    customer = db.relationship('Customer', back_populates = 'carts')
    items = db.relationship('Item', back_populates = 'cart', cascade ='all, delete-orphan')
    checkout = db.relationship('Checkout', back_populates = 'cart')

    

    def __repr__(self):
        return f''


class Customer(db.Model, SerializerMixin):
    __tablename__ = 'customers'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String)
    password = db.Column(db.String)
    email = db.Column(db.String)
    age = db.Column(db.Integer)
    membership = db.Column(db.Boolean, default = False)

    # relationships
    carts = db.relationship('Cart', back_populates = 'customer', cascade = 'all, delete-orphan')



    def __repr__(self):
        return f''


class Store(db.Model, SerializerMixin):
    __tablename__ = 'stores'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String)
    password = db.Column(db.String)
    email = db.Column(db.String)
    location = db.Column(db.String)
    hours = db.Column(db.Integer)

    # relationships
    items = db.relationship('Items', back_populates = 'store')

    def __repr__(self):
        return f''


class Checkout(db.Model, SerializerMixin):
    __tablename__ = 'checkouts'

    id = db.Column(db.Integer, primary_key = True)
    store_id = db.Column(db.Integer, db.ForeignKey('stores.id'))
    cart_id = db.Column(db.Integer, db.ForeignKey('carts.id'))

    # relationships
    cart = db.relationship('Cart', back_populates = 'checkout', cascade = 'all, delete-orphan')

    # serialization

    def __repr__(self):
        return f''

