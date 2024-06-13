# app/__init__.py
from flask import Flask
from pymongo import MongoClient
from flask_jwt_extended import JWTManager
from flask_cors import CORS

app = Flask(__name__)
app.config.from_object('app.config')
app.config["JWT_SECRET_KEY"] = "your_jwt_secret_key"

client = MongoClient(app.config['MONGO_URI'])
db = client[app.config['MONGO_DBNAME']]

jwt = JWTManager(app)
CORS(app, resources={r"/auth/*": {"origins": "*"}})


from app.routes import *

app.register_blueprint(auth_bp)

