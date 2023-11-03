from flask import Flask
from flask_migrate import Migrate
from sqlalchemy import MetaData
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})



db = SQLAlchemy(metadata=metadata)

migrate = Migrate(app, db)

db.init_app(app)