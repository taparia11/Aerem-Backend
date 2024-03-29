const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')

connectToMongo();
const app = express()
const port = 5001

app.use(cors())
app.use(express.json())
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// Available routes 
app.use('/api', require('./routes/feedback'))

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})