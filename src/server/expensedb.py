from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from os import environ

app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root@localhost:3306/bubbletea'
app.config['SQLALCHEMY_DATABASE_URI'] = environ.get('dbURL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


db = SQLAlchemy(app)
CORS(app)
 
# create a class item
class item(db.Model):
    __tablename__ = 'item'
 
    projectid = db.Column(db.String(10), primary_key=True)
    userid = db.Column(db.String(10), primary_key=False)
    name = db.Column(db.String(64), nullable=False)
    description = db.Column(db.String(20), nullable=False)
    budget = db.Column(db.String(50), nullable=False)
   
    def __init__(projectid, userid, name, description,budget):
        self.projectid = projectid
        self.userid = userid
        self.name = name
        self.description = description
        self.budget = budget
 
    def json(self):
        return {"projectid": self.projectid, "userid": self.userid, "name": self.name, "type":description.description, "budget":budget}

# retrive all items from itemdb
@app.route("/project_expenses")
def get_all():
    return jsonify({"expenses": [project_expenses.json() for item in project_expenses.query.all()]})

# retrieve an item by itemid
# @app.route("/project_expenses/<string:itemid>")
# def find_by_projec(itemid):
#     single_item = item.query.filter_by(itemid=itemid).first()
#     if item:
#         return jsonify(single_item.json())
#     return jsonify({"message": "Item not found."}), 404

# run docker to run itemdb
## docker pull ziying123/itemdb:1.0.0
## docker run -p 5000:5000 -e dbURL=mysql+mysqlconnector://is213@host.docker.internal:3306/bubbletea <dockerid>/itemdb:1.0.0
# port: 5000
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)