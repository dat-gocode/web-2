//how many collection (tables) in database
//you create corresponding model in server
//in this project, we only have 1 table
//so we only need to code 1 model

const mongoose = require('mongoose')
//schema == table design/structure
const vocabSchema = mongoose.Schema({
english: { 
    type: String,
    required: [true, "English word can not be empty"],
    minLength: 3,
    maxLength: 40,
},
german: { 
    type: String,
    required: [true, "German word can not be empty"],
    minLength: 3,
    maxLength: 40,
    },
},
{
    versionKey: false
}
)
//declare model and export it
const vocabModel = mongoose.model("vocab", vocabSchema)
module.exports = vocabModel