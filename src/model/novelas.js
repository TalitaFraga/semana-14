const mongoose = require("mongoose")

const novelasSchema = new mongoose.Schema({
    id: {type: Number},
    nome: {type: String},
    ano: {type: Number}, 
    autor: {type: String},
    valeAPenaVerDeNovo: {type: Boolean}

})