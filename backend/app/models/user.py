import bcrypt
from app import db

class User:
    @staticmethod
    def create_user(username, password):
        hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
        db.users.insert_one({'username': username, 'password': hashed_password})

    @staticmethod
    def find_user(username):
        return db.users.find_one({'username': username})

    @staticmethod
    def verify_password(stored_password, provided_password):
        return bcrypt.checkpw(provided_password.encode('utf-8'), stored_password)
