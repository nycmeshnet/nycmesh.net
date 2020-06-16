from bs4 import BeautifulSoup
import requests

url1 = 'https://webcams.nyctmc.org/multiview2.php'
r1 = requests.get(url1)
soup1 = BeautifulSoup(r1.text, 'html.parser')

htmlTables = [["Manhattan","tableCam"],["Brooklyn","tableCam2"]]
for htmlTable in htmlTables:
    cameraList = soup1.find('table', id=htmlTable[1])

    cameraIDs = []
    cameraURLs = []
    cameraNames = []
    boroughName = htmlTable[0]

    for i in cameraList('tr'):
        idRow = i.find('input')
        try:
            if 'value' in idRow.attrs:
                cameraIDs.append(idRow.get('value'))
        except:
            pass

    for cameraID in cameraIDs:   
        url2 = 'https://webcams.nyctmc.org/multiview2.php?listcam=' + cameraID
        r2 = requests.get(url2)
        soup2 = BeautifulSoup(r2.text, 'html.parser')
        cameraURL = soup2.find('img', id="repCamView__ct0_imgLink").get('src')
        cameraURLs.append(cameraURL)
        cameraName = soup2.find('td', {"class": "TitleCam"}).getText()
        cameraNames.append(cameraName)

    for i in range(0,len(cameraIDs)):
        print(cameraNames[i] + "," + cameraIDs[i] + "," + cameraURLs[i] + "," + boroughName)
