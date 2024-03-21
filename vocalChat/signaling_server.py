from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins=['https://htmlfilepub.github.io'])

# Memorizza i peer connessi
connected_peers = {}

@app.route('/offer', methods=['POST'])
def handle_offer():
    data = request.json
    offer = data['offer']
    peer_id = data['peerId']
    
    if peer_id in connected_peers:
        connected_peers[peer_id]['offer'] = offer
        return jsonify({'success': True}), 200
    else:
        return jsonify({'success': False, 'error': 'Peer non trovato'}), 404

@app.route('/answer', methods=['POST'])
def handle_answer():
    data = request.json
    answer = data['answer']
    peer_id = data['peerId']
    
    if peer_id in connected_peers:
        connected_peers[peer_id]['answer'] = answer
        return jsonify({'success': True}), 200
    else:
        return jsonify({'success': False, 'error': 'Peer non trovato'}), 404

@app.route('/get_offer', methods=['GET'])
def get_offer():
    peer_id = request.args.get('peerId')
    if peer_id in connected_peers and 'offer' in connected_peers[peer_id]:
        offer = connected_peers[peer_id]['offer']
        del connected_peers[peer_id]['offer']
        return jsonify({'success': True, 'offer': offer}), 200
    else:
        return jsonify({'success': False, 'error': 'Offerta non disponibile'}), 404

@app.route('/get_answer', methods=['GET'])
def get_answer():
    peer_id = request.args.get('peerId')
    if peer_id in connected_peers and 'answer' in connected_peers[peer_id]:
        answer = connected_peers[peer_id]['answer']
        del connected_peers[peer_id]['answer']
        return jsonify({'success': True, 'answer': answer}), 200
    else:
        return jsonify({'success': False, 'error': 'Risposta non disponibile'}), 404

if __name__ == '__main__':
    app.run(debug=True)
