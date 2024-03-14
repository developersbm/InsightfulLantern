from flask import Flask, request, jsonify
from flask_cors import CORS
from google.cloud import language_v2
import firebase_admin
from firebase_admin import credentials, firestore
app = Flask(__name__)
CORS(app)

if not firebase_admin._apps:
        cred = firebase_admin.credentials.Certificate("./uci-hack-2024-firebase-adminsdk-81ie2-28d5c8fd40.json")
        application = firebase_admin.initialize_app(cred)
else:
        application = firebase_admin.get_app()
db = firestore.client()

CATEGORIES = ["Coding", "General", "Health", "Relationship", "Work", "School", "Family"]

client = language_v2.LanguageServiceClient()

document_type_in_plain_text = language_v2.Document.Type.PLAIN_TEXT

language_code = "en"         
    

def sample_analyze_entities(text_content: str = "I live in Alaska") -> None:
    document = {
         "content": text_content,
         "type_": document_type_in_plain_text,
         "language_code": language_code,
    }

    encoding_type = language_v2.EncodingType.UTF8
    response = client.analyze_entities(
         request = {"document": document, "encoding_type": encoding_type}
    )

    sensitive = ["PERSON", "PHONENUMBER", "LOCATION"]
    flagged = False
    for entity in response.entities:
         name = entity.name
         type = language_v2.Entity.Type(entity.type_).name
         if type in sensitive:
              flagged = True
              break
    
    return flagged

def analyzeSentiment(text_content: str) -> None:
    document = {
        "content": text_content,
        "type_": document_type_in_plain_text,
        "language_code": language_code,
    }

    encoding_type = language_v2.EncodingType.UTF8

    response = client.analyze_sentiment(
        request={"document": document, "encoding_type": encoding_type}
    )
    
    return (True if (response.document_sentiment.score <= -0.3) else False)

@app.route("/create", methods = ["POST"])
def create_post():

    try:
        data = request.json
        result = {"message": "Received data", "data": data, "Category": CATEGORIES[data["category"]]}
                  
        post_collection = db.collection(CATEGORIES[data["category"]])
        
        post_entity = sample_analyze_entities(data["content"])

        post_collection.add({
            'title': data["title"],
            'content': data["content"],
            'flagged': post_entity,
            'replies': {},
            'user': data["user"]
        })
        print("WORKED")
        return jsonify(result), 200
    except Exception as e:
         return jsonify({"error": str(e)}), 500
         print("ERROR")


@app.route("/createreply", methods=['POST'])
def create_reply():
    
    try: 

        data = request.json

        result = {"message": "Received data", "data": data}

        post_collection = db.collection(CATEGORIES[data["category"]]).document(data["uid"])

        post_document = post_collection.get()
        replies = post_document.to_dict().get('replies', {})

        reply_content = data["content"]
        reply = {"flagged": sample_analyze_entities(reply_content), "entity": analyzeSentiment(reply_content), "content": reply_content}
        replies[data["ruid"]] = reply
        

        post_collection.set({'replies': replies}, merge=True) 

        return jsonify(result), 200
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/update", methods=['POST'])
def update():
     
    try:
        data = request.json
        
        result = {"message": "Received data", "data": data}

        post_collection = db.collection(CATEGORIES[data["category"]]).document(data["uid"])
        new_flagged = sample_analyze_entities(data["new_content"])

        post_document = post_collection.get()
        post_replies = post_document.to_dict().get('replies', {}) 
        post_collection.update({
             'title': data["new_title"],
             'content': data["new_content"],
             'replies': post_replies,
             'flagged': new_flagged
        })
        return jsonify(result), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/delete", methods=['POST'])
def delete():
     try:
         data = request.json
         result = {"message": "Received data", "data": data}

         db.collection(CATEGORIES[data["category"]]).document(data["uid"]).delete()
         return jsonify(result), 200
     except Exception as e:
        return jsonify({"error": str(e)}), 500         
          

@app.route("/")
def hello_world():
    return {"hello" : "test"}