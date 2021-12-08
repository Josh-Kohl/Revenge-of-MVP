const express = require('express')
const db = require('./data/database.js')
const app = express()
const port = 3000

app.use(express.static('dist'))

// app.get('/', (req, res) => {
//   res.send('Ahoy second Matey!')
// })

app.get('/hi', (req, res) => {
  db.getTemplates((err, data) => {
    if (err) {
      res.status('500').send();
      return;
    }
    res.status('200').json(data);
  });
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})