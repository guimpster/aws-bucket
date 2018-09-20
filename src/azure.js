import fetch from 'node-fetch';

class Azure {
  constructor(config) {
    //super(config);

    this.azureAccess = {
      url: process.env.AZURE_ACCESS_URL,
      key1: process.env.AZURE_ACCESS_KEY,
      key2: process.env.AZURE_ACCESS_KEY,
      ...config
    };

    this.accessHeader = {
        "Ocp-Apim-Subscription-Key": this.azureAccess.key1
    };
  }

  async detectFaceAzure(url) {
    return fetch(`${this.azureAccess.url}/detect?returnFaceId=true&returnFaceLandmarks=false`, { 
        method: 'POST',
        body: JSON.stringify({ url }),
        headers: { ...this.accessHeader, "Content-Type": "application/json" },
    }).then(res => res.json());
  }

  async verifyFaces(url1, url2) {
    const [{faceId: faceId1}] = await this.detectFaceAzure(url1);
    const [{faceId: faceId2}] = await this.detectFaceAzure(url2);

    console.log('Face1 meta: ', require('util').inspect(faceId1, { depth: null }))
    console.log('Face2 meta: ', require('util').inspect(faceId2, { depth: null }))

    const body = { faceId1, faceId2 };
    return fetch(`${this.azureAccess.url}/verify`, { 
        method: 'POST',
        body:    JSON.stringify(body),
        headers: { ...this.accessHeader, "Content-Type": "application/json" },
    }).then(res => res.json());
  }
}

export default Azure;
