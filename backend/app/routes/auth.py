from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from app.models.user import User

bp = Blueprint('auth', __name__, url_prefix='/auth')

@bp.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    
    if User.find_user(username):
        return jsonify({'msg': 'User already exists'}), 400

    User.create_user(username, password)
    return jsonify({'msg': 'User created successfully'}), 201

@bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    
    user = User.find_user(username)
    if user and User.verify_password(user['password'], password):
        access_token = create_access_token(identity=username)
        return jsonify(access_token=access_token), 200
    return jsonify({'msg': 'Bad username or password'}), 401

@bp.route('/logout', methods=['POST'])
@jwt_required()
def logout():
    return jsonify({'msg': 'Logged out successfully'}), 200
