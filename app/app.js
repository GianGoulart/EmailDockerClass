const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8080

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.post('/', (request, response) => {
    var subject = request.body.subject
    var message = request.body.message

    response.json({ message: `Message has been sent \n Subject: ${subject}, \n Message:${message}` })
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})