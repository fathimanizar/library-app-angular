const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://Fathimanizar:fathimanabianoob@testcluster.cv1hp4e.mongodb.net/?retryWrites=true&w=majority');
const dbUrl = "mongodb+srv://Fathimanizar:fathima@testcluster.cv1hp4e.mongodb.net/LibraryDB";
const connectionParams ={
    useNewUrlParser :true,
    useUnifiedTopology:true
};

mongoose.connect(dbUrl,connectionParams)
.then(()=>{
    console.log("UserData Database connected");
})
.catch(()=>{
    console.log("error");
})

const Schema = mongoose.Schema;

var NewCredentialSchema = new Schema({
    firstname: String,
    lastname: String,
    username: String,
    password: String
   
   
});

var UserData = mongoose.model('userdata', NewCredentialSchema);                        //UserData is the model and NewBookData is the schema

module.exports = UserData;