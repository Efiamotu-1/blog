const express = require("express")
const app = express()

app.use('/' , (req, res) => {
    console.log('main url')
})

app.listen("5000", () => {
    console.log('backend running')
})

