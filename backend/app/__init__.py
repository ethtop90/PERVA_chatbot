from flask import Flask
from pymongo import MongoClient
from flask_jwt_extended import JWTManager

app = Flask(__name__)
app.config.from_object('app.config')
app.config["JWT_SECRET_KEY"] = "your_jwt_secret_key"

client = MongoClient(app.config['MONGO_URI'])
db = client[app.config['MONGO_DBNAME']]

jwt = JWTManager(app)

from app import routes
