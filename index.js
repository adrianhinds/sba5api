const express = require("express")
const app = express()
const port = 3000

app.get('/', async (req, res) => {
    res.send("This is working")
})

app.listen(port, () => {
    console.log(`Listening at ${port}`)
})