from flask import Flask, request ,jsonify, make_response
from flask_cors import CORS
import json
from UserCrop import predictCrop
import base64
import keras
from DiseaseFromIndex import getDiseaseFromIndex
from CropRatePercent import cropRateFunc
from UserYield import predictYield

app = Flask(__name__)
CORS(app)

def preprocess_image(imagePath):
    test = keras.utils.load_img(
        path=imagePath,
        target_size=(224,224)
    )
    image = keras.utils.img_to_array(
        img = test
    )
    image = image[None , :,:,:]
    return image

@app.route("/predictCrop" , methods = ["POST"])
def getCrop():
    reqData = json.loads(request.form.get('values', -1))
    values = [float(reqData['N']) , float(reqData['P']) , float(reqData['K']) , float(reqData['T']) , float(reqData['H']) , float(reqData['pH']) , float(reqData['R'])]
    crops = predictCrop(values=values)
    ans = []
    for ele in crops:
        # print(reqData['CR'])
        if ele.lower() == reqData['CR'].lower():
            continue
        ans.append(ele.upper())
    crops = ans[:5]
    response = make_response(jsonify(crops))
    response.headers['Content-Type'] = 'application/json'

    return jsonify(crops),200    

@app.route("/predictDisease" , methods = ["POST"])
def getDisease():
    reqData = request.get_json()
    if reqData["file"] != "":
        recovered = base64.urlsafe_b64decode((reqData["file"].split(",")[1]))
        img_file = open("./image.jpeg", "wb")
        img_file.write(recovered)
        img_file.close()
    image = preprocess_image("./image.jpeg")
    model = keras.models.load_model(f"./DiseaseModels/{reqData['crop']}.h5")
    if model == None:
        print("Error while loading the model")
        return jsonify("No"),200
    pred = model.predict(image)
    toGet = max(pred[0])
    for i in range(len(pred[0])):
        if pred[0][i] == toGet:
            toGet = i
            break
    obj = getDiseaseFromIndex(crop=reqData['crop'] , index=toGet)
    return jsonify(obj),200    

@app.route("/predictYield" , methods = ["POST"])
def getYield():
    reqData = json.loads(request.form.get('values', -1))
    values = [float(reqData['R']) , float(reqData['F']) , float(reqData['T']) , float(reqData['N']) , float(reqData['P']) , float(reqData['K'])]
    yields = predictYield(values=values)
    yields = float(reqData['area'])
    yields = yields * cropRateFunc(reqData['crop'])
    response = make_response(jsonify(yields))
    response.headers['Content-Type'] = 'application/json'

    return jsonify(yields),200  
if __name__ == "__main__":
    app.run(debug=True)