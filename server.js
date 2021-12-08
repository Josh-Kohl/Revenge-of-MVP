const express = require('express')
const app = express()
const port = 3000

app.use(express.static('dist'))

app.get('/', (req, res) => {
  res.send('Ahoy second Matey!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})