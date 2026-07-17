//link to Model
const vocabModel = require('../models/vocabModel')
//decline business logic of API
const createVocab = async (req, res) => {
    try {
        const newVocab = req.body
        const vocab = await vocabModel.create(newVocab)
        res.status(201).json(vocab)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}
const viewAllVocabs = async (req, res) => {
      try {
        const vocabs = await vocabModel.find({})
        res.send(vocabs)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const viewVocabById = async (req, res) => {
      try {
        const id = req.params.id
        const vocab = await vocabModel.findById(id)
        if (!vocab) {
            return res.status(404).json({ error: "Vocab not found" })
        }
        res.send(vocab)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const updateVocabById = async (req, res) => {       
     try {
        const id = req.params.id
        const updatedVocab = req.body
        const vocab = await vocabModel.findByIdAndUpdate(id, updatedVocab, { new: true, runValidators: true })
        if (!vocab) {
            return res.status(404).json({ error: "Vocab not found" })
        }
        res.json({ message: "Update vocab succeed!", vocab })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

const deleteAllVocabs = async (req, res) => {
      try {
        await vocabModel.deleteMany()
        res.json({ message: "Delete all vocabs succeed!" })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const deleteVocabById = async (req, res) => {
      try {
        const id = req.params.id
        const deleted = await vocabModel.findByIdAndDelete(id)
        if (!deleted) {
            return res.status(404).json({ error: "Vocab not found" })
        }
        res.json({ message: "Delete vocab by id succeed!" })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}


//
module.exports = {
    createVocab, viewAllVocabs, viewVocabById,
    updateVocabById, deleteAllVocabs, deleteVocabById
}