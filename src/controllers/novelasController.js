const novelas = require('../models/novelas')

const getAll = (req, res) => {
    novelas.find((err, novelas) => {
        if (err) {
            res.status(500).send({ message: err.message})
        }
        res.status(200).send(novelas)
    })
}

const getValeAPenaVerDeNovo = (req, res) => {
    novelas.find({valeAPenaVerDeNovo:true}, (err, novelas) => {
        if(err) {
            res.status(500).send({message: err.message})
        }
        res.status(200).send(novelas)
    })
}

const postNovelas = (req, res) => {
    const novela = new novelas(req.body)

    novela.save(err => {
        if (err) {
            res.status(500).send({ message: err.message})
        }
        res.status(200).send(novela.toJSON())
    })
}

const deleteNovela = (req, res) => {
    const id = req.params.id

    novelas.find({ id }, (err, novela) => {
        if(novela.length > 0) {
            novelas.deleteMany({ id }, (err) => {
                if (err) {
                    res.status(500).send({ message: err.message, status: "FAIL"})
                }
                res.status(200).send({ message: "Registro removido", status: "SUCCESS"})
            })
        } else {
            res.status(200).send({ message: "Não há novela para ser removida", status: "EMPTY"})
        }
    })
}

module.exports = {getAll, postNovelas, getValeAPenaVerDeNovo, deleteNovela }