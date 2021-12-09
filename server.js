const express = require('express')
const db = require('./data/database.js')
const credentials = require('./data/credentials')
const WolframAlphaAPI = require('wolfram-alpha-api');
const waApi = WolframAlphaAPI(credentials.WolfAPI);
const axios = require('axios');


const app = express()
const port = 3000

app.use(express.static('dist'))


app.get('/hi', (req, res) => {
  db.getTemplates((err, data) => {
    if (err) {
      res.status('500').send();
      return;
    }
    res.status('200').json(data);
  });
});

waApi.getFull('.12 = x/(x+2000)')
  .then((response) => {
    var solutionFullText = 'placeholder';

    for (var i = 0; i < response.pods.length; i++) {

      // console.log(response.pods[i].title, response.pods[i].subpods)

      if (response.pods[i].title === 'Solution'){
        console.log(response.pods[i].subpods)

        solutionFullText = response.pods[i].subpods[0].plaintext
      }
    }

    console.log(typeof(parseInt(solutionFullText.slice(2))));
  })
  .catch((error) => {
    // handle error
    console.log(error);
  })






app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})