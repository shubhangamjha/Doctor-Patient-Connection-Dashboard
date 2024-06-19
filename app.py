from flask import Flask, request, jsonify
from pymongo import MongoClient
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS

# MongoDB connection
mongo_url = "mongodb+srv://assesment_user:uYdY!7f9C-HnX%40Y@cluster0.vcxxyf3.mongodb.net/Formulo_assesment"
client = MongoClient(mongo_url)
db = client.get_database("Formulo_assesment")
patients_collection = db['patient-gateway']  # Use the correct collection name


@app.route('/api/patients', methods=['GET'])
def get_patients():
    patient_name = request.args.get('name', None)
    query = {}
    if patient_name:
        query["patient_name"] = patient_name

    patients = list(patients_collection.find(query))

    for patient in patients:
        patient["_id"] = str(patient["_id"])  # Convert ObjectId to string for JSON serialization

    response = {
        "code": 200,
        "status": "Success",
        "data": patients
    }
    return jsonify(response)


if __name__ == '__main__':
    app.run(debug=True)
