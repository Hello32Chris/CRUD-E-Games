from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

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

    def __repr__(self):
        return f''


class Cart(db.Model, SerializerMixin):
    __tablename__ = 'carts'


    id = db.Column(db.Integer, primary_key = True)
    customer_id = db.Column(db.Integer, db.ForeignKey('customers.id'))
    item_id = db.Column(db.Integer, db.ForeignKey('items.id'))

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

    def __repr__(self):
        return f''

