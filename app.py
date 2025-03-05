from flask import Flask, request, jsonify
from flask_cors import CORS
import jwt
from datetime import datetime, timezone, timedelta

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

usuarios = {}
CHAVE_SECRETA = "sua_chave_secreta_aqui"

@app.route('/signup', methods=['POST'])
def signup():
    dados = request.get_json()
    email = dados.get('email')
    senha = dados.get('password')
    if not email or not senha:
        return jsonify({'erro': 'Email e senha são obrigatórios'}), 400
    if email in usuarios:
        return jsonify({'erro': 'O usuário já existe'}), 409
    usuarios[email] = senha
    return jsonify({'mensagem': 'Usuário registrado com sucesso'}), 201

@app.route('/token', methods=['POST'])
def login():
    dados = request.get_json()
    email = dados.get('email')
    senha = dados.get('password')
    if email not in usuarios or usuarios[email] != senha:
        return jsonify({'erro': 'Credenciais inválidas'}), 401
    token = jwt.encode({
        'email': email,
        'exp': datetime.now(timezone.utc) + timedelta(hours=1)
    }, CHAVE_SECRETA)
    return jsonify({'token': token}), 200

@app.route('/private', methods=['GET'])
def private():
    token = request.headers.get('Authorization')
    if not token:
        return jsonify({'erro': 'Token não fornecido'}), 401
    try:
        if token.startswith('Bearer '):
            token = token[7:]
        dados = jwt.decode(token, CHAVE_SECRETA, algorithms=["HS256"])
        return jsonify({'mensagem': f'Bem-vindo, {dados["email"]}! Esta é uma rota privada'}), 200
    except jwt.ExpiredSignatureError:
        return jsonify({'erro': 'Token expirado'}), 401
    except jwt.InvalidTokenError:
        return jsonify({'erro': 'Token inválido'}), 401

if __name__ == '__main__':
    app.run(debug=True, port=5000)