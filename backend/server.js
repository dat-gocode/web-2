//declare express framework
const express = require('express')
const app = express()

//declare express json & urlencoded(to help server receive data from client)
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//declare CORS(for client can receive API from server)
const cors = require('cors')
app.use(cors())

//decalre mongoose and connect to database
const mongoose = require('mongoose')
const local_db =  "mongodb://localhost:27017/Vocab-builder"
mongoose.connect(local_db)
.then(() => console.log("DB connection succeed"))
.catch((err) => console.error("DB connect failed !", + err))

//decalare route
const vocabRoute= require('./api/routes/vocabRoute')
vocabRoute(app)


//run web sever (by listening port)
const port = 3000
app.listen(port, () => {
    console.log('Backend server has started on port ' + port)
    //console.log(`Backend server has started on port ${port}`)
})