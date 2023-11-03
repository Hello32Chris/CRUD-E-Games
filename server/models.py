from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates

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
    description = db.Column(db.String)
    quantity = db.Column(db.Integer)
    price = db.Column(db.Float)
    store_id = db.Column(db.Integer, db.ForeignKey('stores.id'))

    # relationships
    cart = db.relationship('Cart', back_populates = 'items', cascade ='all, delete-orphan')
    store = db.realtionship('Store', back_populates = 'items')

    # association proxy

    # serialization
    serialize_rules = ('-cart.items', '-store.items')

    # validations

    def __repr__(self):
        return f''


class Cart(db.Model, SerializerMixin):
    __tablename__ = 'carts'


    id = db.Column(db.Integer, primary_key = True)
    customer_id = db.Column(db.Integer, db.ForeignKey('customers.id'))
    item_id = db.Column(db.Integer, db.ForeignKey('items.id'))

    # relationships
    customer = db.relationship('Customer', back_populates = 'carts')
    items = db.relationship('Item', back_populates = 'cart')
    checkout = db.relationship('Checkout', back_populates = 'cart', cascade ='all, delete-orphan')

    # association proxy

    # serialization
    serialize_rules = ('-customer.carts', '-items.cart', '-checkout.cart')
    
    # validations

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

    # association proxy
    items = association_proxy('Cart', 'items')

    # serialization
    serialize_rules = ('-carts.customer')

    # validations
    @validates('name')
    def validates_name(self, key, name):
        pass


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
    items = db.relationship('Items', back_populates = 'store', cascade ='all, delete-orphan')
    checkouts = db.relationship('Checkout', back_populates = 'store', cascade ='all, delete-orphan')

    # association proxy

    # serialization
    serialize_rules = ('-items.store', '-checkouts.store')

    # validations


    def __repr__(self):
        return f''


class Checkout(db.Model, SerializerMixin):
    __tablename__ = 'checkouts'

    id = db.Column(db.Integer, primary_key = True)
    store_id = db.Column(db.Integer, db.ForeignKey('stores.id'))
    cart_id = db.Column(db.Integer, db.ForeignKey('carts.id'))

    # relationships
    cart = db.relationship('Cart', back_populates = 'checkout')
    store = db.relationship('Store', back_populates = 'checkouts')

    # association proxy
    customer = association_proxy('Cart', 'customer')
    items = association_proxy('Cart', 'items')

    # serialization
    serialize_rules = ('-cart.checkout', '-store.checkouts')

    # validations


    def __repr__(self):
        return f''

