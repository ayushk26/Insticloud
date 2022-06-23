const Gun = require('gun')
const express = require('express')

const app = express()

app.use(Gun.serve)

const PORT = 8000
const server = app.listen(PORT,()=>{
    console.log("Server started on port:",PORT)
})

Gun({web:server})