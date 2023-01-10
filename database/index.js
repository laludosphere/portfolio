require('dotenv').config()
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
exports.clientPromise = mongoose.connect(process.env.MONGO_URI)
        .then( () => console.log('connexion db ok !'))
        .catch( err => console.log(err));