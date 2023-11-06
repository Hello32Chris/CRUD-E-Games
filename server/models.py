from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates

from config import db


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
    # cart = db.relationship('Cart', back_populates = 'items', cascade ='all, delete-orphan')
    store = db.relationship('Store', back_populates = 'items')

    # association proxy

    # serialization
    serialize_rules = ('-store.items', )

    # validations
    @validates('name')
    def validates_name(self, key, name):
        if 3 <= len(name):
            return name
        else:
            raise ValueError('name must be between 3 and 50 characters, inclusive!')
    
    @validates('type')
    def validates_type(self, key, type):
        if type:
            return type
        else:
            raise ValueError('')
    
    @validates('price')
    def validates_price(self, key, price):
        if price:
            return price
        else:
            raise ValueError('')

    def __repr__(self):
        return f''


class Cart(db.Model, SerializerMixin):
    __tablename__ = 'carts'


    id = db.Column(db.Integer, primary_key = True)
    customer_id = db.Column(db.Integer, db.ForeignKey('customers.id'))
    # item_id = db.Column(db.Integer, db.ForeignKey('items.id'))

    # relationships
    customer = db.relationship('Customer', back_populates = 'carts')
    # items = db.relationship('Item', back_populates = 'cart')
    checkout = db.relationship('Checkout', back_populates = 'cart', cascade ='all, delete-orphan')

    # association proxy

    # serialization
    serialize_rules = ('-customer.carts',
                        #'-items.cart', 
                        '-checkout.cart')
    
    # validations

    def __repr__(self):
        return f''


class Customer(db.Model, SerializerMixin):
    __tablename__ = 'customers'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String)
    password = db.Column(db.String)
    email = db.Column(db.String, unique = True)
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
        if 3 <= len(name):
            return name
        else:
            raise ValueError('name must be between 3 and 15 characters, inclusive!')
        
    @validates('password')
    def validates_password(self, key, password):
        if len(password) < 8:
            raise ValueError("Make sure your password is at lest 8 letters")
        elif re.search('[0-9]',password) is None:
            raise ValueError("Make sure your password has a number in it")
        elif re.search('[A-Z]',password) is None: 
            raise ValueError("Make sure your password has a capital letter in it")
        else:
            return password
    @validates('email')
    def validates_email(self, key, email):
        if 3 <= len(email):
            return email
        else:
            raise ValueError('email must be between 3 and 15 characters, inclusive!')
        
    @validates('age')
    def validates_age(self, key, age):
        if 13 <= age:
            return age
        else:
            raise ValueError('age must be between 3 and 80, inclusive!')
    

    def __repr__(self):
        return f''


class Store(db.Model, SerializerMixin):
    __tablename__ = 'stores'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String)
    password = db.Column(db.String)
    email = db.Column(db.String, unique = True)
    location = db.Column(db.String)
    hours = db.Column(db.Integer)
    # relationships
    items = db.relationship('Item', back_populates = 'store', cascade ='all, delete-orphan')
    checkouts = db.relationship('Checkout', back_populates = 'store', cascade ='all, delete-orphan')

    # association proxy

    # serialization
    serialize_rules = ('-items.store', '-checkouts.store')

    # validations
    @validates('name')
    def validates_name(self, key, name):
        if 3 <= len(name):
            return name
        else:
            raise ValueError('name must be between 3 and 15 characters, inclusive!')

    @validates('password')
    def validates_password(self, key, password):
        if len(password) < 8:
            raise ValueError("Make sure your password is at lest 8 letters")
        elif re.search('[0-9]',password) is None:
            raise ValueError("Make sure your password has a number in it")
        elif re.search('[A-Z]',password) is None: 
            raise ValueError("Make sure your password has a capital letter in it")
        else:
            return password
    
    @validates('email')
    def validates_email(self, key, email):
        if 3 <= len(email):
            return email
        else:
            raise ValueError('email must be between 3 and 15 characters, inclusive!')


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
