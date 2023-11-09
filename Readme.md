# CRUD-E Games

Welcome to the CRUD-E Games Management System, a web application built with Flask for efficient management of a game store. This system provides features for handling items, customers, stores, carts, and checkout operations.
--------------------------------------------

## Features

### 1. Item Management
=================================
- **View Items:** Retrieve a list of all available game items.
- **View Item Details:** Get detailed information about a specific game item.
- **Add New Item:** Add new game items to the CRUD-E Games inventory.
- **Update Item Details:** Modify details such as name, type, description, quantity, and price for a specific item.
- **Remove Item:** Delete a game item from the inventory.

### 2. Customer Management
=================================
- **View Customers:** Access a list of all registered customers.
- **View Customer Details:** Retrieve detailed information about a specific customer.
- **Register New Customer:** Add new customers to the CRUD-E Games system.
- **Update Customer Details:** Modify customer information, including name, username, password, email, and age.
- **Remove Customer:** Delete a customer from the system.

### 3. Store Management
=================================
- **View Stores:** Retrieve a list of all game stores, including CRUD-E Games.
- **View Store Details:** Get detailed information about the CRUD-E Games store.
- **Update Store Information:** Modify store details, including name, email, and location.

### 4. Cart Management
=================================
- **View Carts:** Access a list of all shopping carts.
- **View Cart Details:** Retrieve detailed information about a specific shopping cart.
- **Create New Cart:** Initialize a new shopping cart for a customer.
- **Update Cart:** Modify the contents of a shopping cart.

### 5. Checkout Operations
=================================
- **Process Checkout:** Complete the purchase by processing checkout operations.

## Getting Started
=================================
Set Up the Database:

python manage.py db init
python manage.py db migrate
python manage.py db upgrade
python seed.py

Usage:
cd server
python app.py

In new terminal:
npm start

### Clone the Repository
-----------------------------

REPO: https://github.com/Hello32Chris/CRUD-E-Games