from flask import Flask, make_response, jsonify, request
from flask_migrate import Migrate

from models import db, Item, Cart, Customer, Store #, checkout

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

migrate = Migrate(app, db)

db.init_app(app)


@app.route('/')
def home():
    return '<h1 align="center">Welcome!!</h1>'

@app.route('/stores', methods=['GET'])
def stores():
    if request.method == 'GET':
        stores = Store.query.all()
        store_dict = [store.to_dict() for store in stores]
        resp = make_response(store_dict, 200)
    return resp


@app.route('/stores/<int:id>', methods = ['GET'])
def store_ids(id):
    store = Store.query.filter_by(id = id).first()
    if store:
        if request.method == 'GET':
            resp = make_response(store.to_dict(rules = ('-carts')), 200)
    else:
        resp = make_response({"error": "Store not found"})
    return resp

# @app.routes('/carts/<int:id>')
# pass


if __name__ == '__main__':
    app.run(port=5555, debug=True)