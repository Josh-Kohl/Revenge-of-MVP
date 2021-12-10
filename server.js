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

app.get('/wolfram', (req, res) => {
  waApi.getFull(req.query.query)
    .then((response) => {
      var solution = 'placeholder';

      //Search through the mess of the api response to pull / clean the calculation result
      for (var i = 0; i < response.pods.length; i++) {
        if (response.pods[i].title === 'Solution'){
          let solutionFullText = response.pods[i].subpods[0].plaintext
          solution = parseInt(solutionFullText.slice(2))
        }
      }

      return res.status(201).json(solution);
    })
    .catch((error) => {

      console.log('Error from WolframAlpha API call.', error);
      return res.status(500).json('Server error from API call.');
    })
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})