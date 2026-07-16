//route (router): define API endpoints + methods
//link to controller

const vocabController = require('../controllers/vocabController')

const vocabRoute = (app) => {
    //declare all API endpoints + methods
    //CREATE - POST
    app.post('/api/vocabs', vocabController.createVocab)
    
    //READ - GET
    app.get('/api/vocabs', vocabController.viewAllVocabs)
    app.get('/api/vocabs/:id', vocabController.viewVocabById)

    //UPDATE - PUT
    app.put('/api/vocabs/:id', vocabController.updateVocabById)

    //DELETE - DELETE
    app.delete('/api/vocabs', vocabController.deleteAllVocabs)
    app.delete('/api/vocabs/:id', vocabController.deleteVocabById)

    // app.route('/vocabs/search/:word')
    // .get(vocabController.searchWord)

}

//export route
module.exports = vocabRoute
