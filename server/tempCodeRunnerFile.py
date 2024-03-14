if not firebase_admin._apps:
#         cred = firebase_admin.credentials.Certificate("./uci-hack-2024-firebase-adminsdk-81ie2-28d5c8fd40.json")
#         application = firebase_admin.initialize_app(cred)
# else:
#         application = firebase_admin.get_app()
# db = firestore.client()

# CATEGORIES = ["Coding", "General", "Health", "Relationship", "Work", "School", "Family"]

# def analyzeSentiment(text_content: str) -> None:
#     client = language_v2.LanguageServiceClient()

#     document_type_in_plain_text = language_v2.Document.Type.PLAIN_TEXT

#     language_code = "en"
#     document = {
#         "content": text_content,
#         "type_": document_type_in_plain_text,
#         "language_code": language_code,
#     }

#     encoding_type = language_v2.EncodingType.UTF8

#     response = client.analyze_sentiment(
#         request={"document": document, "encoding_type": encoding_type}
#     )

#     print(f"Document sentiment score: {response.document_sentiment.score}")
#     print(f"Document sentiment magnitude: {response.document_sentiment.magnitude}")
#     for sentence in response.sentences:
#         print(f"Sentence text: {sentence.text.content}")
#         print(f"Sentence sentiment score: {sentence.sentiment.score}")
#         print(f"Sentence sentiment magnitude: {sentence.sentiment.magnitude}")

#     print(f"Language of the text: {response.language_code}")
#     return response.document_sentiment.score

# @app.route("/create", methods = ["POST"])
# def create_post():

#     try:
#         data = request.json
#         result = {"message": "Received data", "data": data, "Category": CATEGORIES[data["category"]]}
                  
#         post_collection = db.collection(CATEGORIES[data["category"]])
        
#         post_score = analyzeSentiment(data["content"])

#         post_collection.add({
#             'title': data["title"],
#             'content': data["content"],
#             'score': post_score,
#             'replies': {}
#         })

#         return jsonify(result), 200
#     except Exception as e:
#          return jsonify({"error": str(e)}), 500


# @app.route("/createreply", methods=['POST'])
# def create_reply():
    
#     try: 

#         data = request.json

#         result = {"message": "Received data", "data": data}

#         post_collection = db.collection(data["category"]).document(data["uid"])

#         post_document = post_collection.get()
#         replies = post_document.to_dict().get('replies', {})

#         replies[data["ruid"]] = data["content"]

#         post_collection.set({'replies': replies}, merge=True) 

#         return jsonify(result), 200
    
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# @app.route("/update", methods=['POST'])
# def update():
     
#     try:
#         data = request.json
        
#         result = {"message": "Received data", "data": data}

#         post_collection = db.collection(CATEGORIES[data["category"]]).document(data["uid"])
#         new_post_score = analyzeSentiment(data["new_content"])

#         post_document = post_collection.get()
#         post_replies = post_document.to_dict().get('replies', {}) 
#         post_collection.update({
#              'title': data["new_title"],
#              'content': data["new_content"],
#              'replies': post_replies,
#              'score': new_post_score
#         })
#         return jsonify(result), 200

#     except Exception as e:
#         return jsonify({"error": str(e)}), 500


# @app.route("/delete", methods=['POST'])
# def delete():
#      try:
#          data = request.json
#          result = {"message": "Received data", "data": data}

#          db.collection(CATEGORIES[data["category"]]).document(data["uid"]).delete()
#          return jsonify(result), 200
#      except Exception as e:
#         return jsonify({"error": str(e)}), 500