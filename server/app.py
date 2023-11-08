from flask import make_response, request, render_template, redirect, url_for, flash
from models import Item, Cart, Customer, Store #, checkout
# from flask_login import LoginManager, login_user, current_user, login_required, logout_user, login_manager
from config import db, app


#----------------------------------------
# ALL ITEMS
#----------------------------------------
@app.route('/items', methods=['GET'])
def items():

# ---------------- GET -----------------------
    if request.method == 'GET':
        items = Item.query.all()
    return make_response([item.to_dict(rules=('-store_id', )) for item in items], 200)



@app.route('/checkout', methods=[''])



#----------------------------------------
# ITEMS BY ID
#----------------------------------------
@app.route('/items/<int:id>', methods=['GET', 'POST', 'PATCH', 'DELETE'])
def item_by_id(id):
    item_by_id = Item.query.filter_by(id = id).first()
    if item_by_id:

# ---------------- GET -----------------------
        if request.method == 'GET':
            resp = make_response(item_by_id.to_dict(), 200)

#----------------- POST-----------------------
        elif request.method == 'POST':
            form_data = request.get_json()
            try:
                new_item_obj = Item(
                    name = form_data['name'],
                    type = form_data['type'],
                    description = form_data['description'],
                    quantity = form_data['quantity'],
                    price = form_data['price']
                    ###  add some functionality to automatically mark which store id  ###
                )
                db.session.add(new_item_obj)
                db.session.commit()
                resp = make_response(new_item_obj.to_dict(), 201)
            except ValueError:
                resp = make_response({ "errors" : ["Validation Errors!"]}, 400)

#---------------- PATCH-----------------------
        elif request.method == 'PATCH':
            form_data = request.get_json()
            try:
                for attr in form_data:
                    setattr(item_by_id, attr, form_data.get(attr))
                db.session.commit()
                resp = make_response(item_by_id.to_dict(), 202)
            except ValueError:
                resp = make_response({ "errors": ["Validation Errors"]}, 400)

# --------------- DELETE -------------------------
        elif request.method == 'DELETE':
            db.session.delete(item_by_id)
            db.session.commit()
            resp = make_response({}, 204)

    else:
        resp = make_response({"error": "No Item found!"})
    return resp


#----------------------------------------
# ALL CUSTOMERS
#----------------------------------------
@app.route('/customers', methods=['GET', 'POST'])
def customers():
    customers = Customer.query.all()

# ---------------- GET -----------------------
    if request.method == 'GET':
        return make_response([customer.to_dict(rules=('-carts', )) for customer in customers], 200)
    
    elif request.method == 'POST':
        form_data = request.get_json()
        try:
            new_customer_obj = Customer(
                name = form_data['name'],
                user_name = form_data['username'],
                password = form_data['password'],
                email = form_data['email'],
                age = form_data['age']
            )
            db.session.add(new_customer_obj)
            db.session.commit()
            resp = make_response(new_customer_obj.to_dict(), 201)
            return resp
        except ValueError:
            resp = make_response({ "errors": ["Validation Errors!"]}, 400)
    return resp



#----------------------------------------
# CUSTOMERS BY ID
#----------------------------------------
@app.route('/customers/<int:id>', methods=['GET', 'POST', 'PATCH', 'DELETE'])
def customer_by_id(id):
    customer = Customer.query.filter_by(id = id).first()
    if customer:

# ---------------- GET -----------------------
        if request.method == 'GET':
            resp = make_response(customer.to_dict(), 200)

#---------------- PATCH-----------------------
        elif request.method == 'PATCH':
            form_data = request.get_json()
            try:
                for attr in form_data:
                    setattr(customer, attr, form_data.get(attr))
                db.session.commit()
                resp = make_response(customer.to_dict(), 202)
            except ValueError:
                resp = make_response({ "errors": ["Validation Errors"]}, 400)

# --------------- DELETE -----------------------
        elif request.method == 'DELETE':
            db.session.delete(customer)
            db.session.commit()
            resp = make_response({}, 204)

    else:
        resp = make_response({"error" : "No Customer Found!"}, 404)    
    return resp

#----------------------------------------
# ALL STORES
#----------------------------------------
@app.route('/stores', methods=['GET'])
def stores():

# ---------------- GET -----------------------
    if request.method == 'GET':
        stores = Store.query.all()
        store_dict = [store.to_dict() for store in stores]
        resp = make_response(store_dict, 200)
    return resp


#----------------------------------------
# STORES BY ID
#----------------------------------------
@app.route('/stores/<int:id>', methods = ['GET', 'PATCH'])
def store_by_id(id):
    store_by_id = Store.query.filter_by(id = id).first()
    if store_by_id:

# ---------------- GET -----------------------
        if request.method == 'GET':
            resp = make_response(store_by_id.to_dict(rules = ()), 200)

#---------------- PATCH-----------------------
        elif request.method == 'PATCH':
            form_data = request.get_json()
            try:
                for attr in form_data:
                    setattr(store_by_id, attr, form_data.get(attr))
                db.session.commit()
                resp = make_response(store_by_id.to_dict(), 202)
            except ValueError:
                resp = make_response({ "errors": ["Validation Errors"]}, 400)
    else:
        resp = make_response({"error": "Store not found"}, 404)
    return resp

@app.route('/carts', methods = ['GET', 'POST', 'PATCH'])
def carts():
    carts = Cart.query.all()
    if carts:

# ---------------- GET -----------------------
        if request.method == 'GET':
            resp = make_response([cart.to_dict(rules = ('-checkout.store.password','-customer.password', '-checkout.store.items')) for cart in carts], 200)

# ---------------- POST -----------------------
        elif request.method == 'POST':
            form_data = request.get_json()
            try:
                new_cart_obj = Customer(
                    customer_id = form_data['customer_id']
                )
                db.session.add(new_cart_obj)
                db.session.commit()
                resp = make_response(new_cart_obj.to_dict(), 201)
            except ValueError:
                resp = make_response({ "errors": ["Validation Errors"]}, 400)

# ---------------- PATCH -----------------------
        elif request.method == 'PATCH':
            form_data = request.get_json()
            try:
                for attr in form_data:
                    setattr(store_by_id, attr, form_data.get(attr))
                db.session.commit()
                resp = make_response(store_by_id.to_dict(), 202)
            except ValueError:
                resp = make_response({ "errors": ["Validation Errors"]}, 400)
                
    else:
        resp = make_response({ "error": "No Cart Found!"}, 404)
    return resp


@app.route('/carts/<int:id>', methods=['GET', 'POST', 'PATCH'])
def cart_by_id(id):
    cart_by_id = Cart.query.filter_by(id = id).first()
    if cart_by_id:

# ---------------- GET -----------------------
        if request.method == 'GET':
            resp = make_response(cart_by_id.to_dict(rules = ('-checkout.store.password','-customer.password', '-checkout.store.items')), 200)

# ---------------- POST -----------------------
        elif request.method == 'POST':
            form_data = request.get_json()
            try:
                new_cart_obj = Customer(
                    customer_id = form_data['customer_id']
                )
                db.session.add(new_cart_obj)
                db.session.commit()
                resp = make_response(new_cart_obj.to_dict(), 201)
            except ValueError:
                resp = make_response({ "errors": ["Validation Errors"]}, 400)

# ---------------- PATCH -----------------------
        elif request.method == 'PATCH':
            form_data = request.get_json()
            try:
                for attr in form_data:
                    setattr(store_by_id, attr, form_data.get(attr))
                db.session.commit()
                resp = make_response(store_by_id.to_dict(), 202)
            except ValueError:
                resp = make_response({ "errors": ["Validation Errors"]}, 400)
                
    else:
        resp = make_response({ "error": "No Cart Found!"}, 404)
    return resp

@app.route('/carts/customer_<int:customer_id>', methods=['GET', 'POST', 'PATCH'])
def cart_by_customer_id(customer_id):
    cart_by_customer_id = Cart.query.filter_by(customer_id = customer_id).first()
    if cart_by_customer_id:

# ---------------- GET -----------------------
        if request.method == 'GET':
            resp = make_response(cart_by_customer_id.to_dict(rules = ('-checkout.store.password','-customer.password', '-checkout.store.items')), 200)

# ---------------- POST -----------------------
        elif request.method == 'POST':
            form_data = request.get_json()
            try:
                new_cart_obj = Customer(
                    customer_id = form_data['customer_id']
                )
                db.session.add(new_cart_obj)
                db.session.commit()
                resp = make_response(new_cart_obj.to_dict(), 201)
            except ValueError:
                resp = make_response({ "errors": ["Validation Errors"]}, 400)

# ---------------- PATCH -----------------------
        elif request.method == 'PATCH':
            form_data = request.get_json()
            try:
                for attr in form_data:
                    setattr(store_by_id, attr, form_data.get(attr))
                db.session.commit()
                resp = make_response(store_by_id.to_dict(), 202)
            except ValueError:
                resp = make_response({ "errors": ["Validation Errors"]}, 400)
                
    else:
        resp = make_response({ "error": "No Cart Found!"}, 404)
    return resp

@app.route('/cart_items', methods = ['POST'])
def add_to_cart():
    try:
        data = request.get_json()
        cart_id = data['cart_id']
        item_id = data['item_id']

        # Perform the necessary operations, e.g., add the item to the cart_items
        # Ensure validation and error handling

        return make_response({'message': 'Item added to cart successfully'}, 201)
    except Exception as e:
        return make_response({'error': str(e)}, 400)
    
@app.route('/remove_from_cart', methods=['POST'])
def remove_from_cart():
    try:
        data = request.get_json()
        cart_id = data['cart_id']
        item_id = data['item_id']

        # Perform the necessary operations, e.g., remove the item from the cart_items
        # Ensure validation and error handling

        return make_response({'message': 'Item removed from cart successfully'})
    except Exception as e:
        return make_response({'error': str(e)}, 400)

if __name__ == '__main__':
    app.run(port=5555, debug=True)