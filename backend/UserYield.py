import pickle
import numpy as np 


def predictYield(values):
    scaler = pickle.load(open("scaler.pkl" , "rb"))

    lr = pickle.load(open("lr.pkl" , "rb"))
    
    values = np.array(values).reshape(1,-1)
    values = scaler.transform(values)
    pred = lr.predict(values)
    return pred[0]

if __name__ == '__main__':
    N = 90
    p = 42
    K = 43
    temp = 20.74
    humid = 82
    pH = 6.5
    val = [95,	16,	46	,27.076726	,90.143626,	6.74669]
    print(predict(val))
