//link to Model
const vocabModel = require('../models/vocabModel')
//decline business logic of API
const createVocab = async (req, res) => {
    try {
        const newVocab = req.body
        await vocabModel.create(newVocab)
        res.send(newVocab)
        res.json({message: "Add new vocab succeed!"})
    } catch (err) {
        res.send(err)
    }
}
const viewAllVocabs = async (req, res) => {
      try {
        const vocabs = await vocabModel.find({})
        res.send(vocabs)
    } catch (err) {
        res.send(err)
    }
}

const viewVocabById = async (req, res) => {
      try {
        const id = req.params.id
         const vocab = await vocabModel.findById(id)
        res.send(vocab)
    } catch (err) {
        res.send(err)
    }
}

const updateVocabById = async (req, res) => {       
     try {
        const id = req.params.id
        const updatedVocab = req.body
        await vocabModel.findByIdAndUpdate(id, updatedVocab)
        res.json({message: "Update vocab succeed!"})
    } catch (err) {
        res.send(err)
    }
}

const deleteAllVocabs = async (req, res) => {
      try {
        await vocabModel.deleteMany()
        res.json({message: "Delete all vocabs succeed!"})
    } catch (err) {
        res.send(err)
    }
}

const deleteVocabById = async (req, res) => {
      try {
        const id = req.params.id
        await vocabModel.deleteById(id)
        res.json({message: "Delete vocab by id succeed!"})
    } catch (err) {
        res.send(err)
    }
}


//
module.exports = {
    createVocab, viewAllVocabs, viewVocabById,
    updateVocabById, deleteAllVocabs, deleteVocabById
}