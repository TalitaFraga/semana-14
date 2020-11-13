const express = require("express")
const mongoose = require("mongoose")

const app = express()

mongoose.connect("mongodb://localhost:27017/novelas", {useNewUrlParser: true, useUnifiedTopology: true})

let db = mongoose.connection

db.on("error", console.log.bind(console, "connection error:"))
db.once("open", () => {
    console.log("conexão feita com sucesso")
})

const novelas = require("./routes/novelasRoute")

app.use(express.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-Width, Content-Type, Accept"
    )
    next()
})

app.use("/novelas", novelas)

module.exports = app