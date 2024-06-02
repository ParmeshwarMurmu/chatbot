const mongoose = require('mongoose')

const connection = mongoose.connect("mongodb+srv://YOUR ATLAS ID : YOUR ATLAS PASSWORD@cluster0.nnesbwa.mongodb.net/Chatbot?retryWrites=true&w=majority")

module.exports = {
    connection
}


