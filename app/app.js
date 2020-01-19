const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8080
const {Client} = require('pg')
const redis = require('redis')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

const client = new Client({
  user: 'postgres',
  host: 'db',
  database: 'email_sender'
})

client.connect()

const queue = redis.createClient(6379,'queue',0)

app.post('/', (request, response) => {
    var subject = request.body.subject
    var message = request.body.message

    client.query(`INSERT INTO emails (subject, message) VALUES('${subject}', '${message}')`, (err, res) => {
      console.log(err, res)
      client.end()
    })
    const msg = {Subject: subject, Message:message}
    queue.rpush('sender',msg)    
    response.json({ message: `Message has been sent \n Subject: ${subject}, \n Message:${message}` })
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})