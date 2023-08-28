const app = require('./app');
const mongoose = require('mongoose');
const db = 'mongodb://127.0.0.1:27017/admin';
// const db = 'mongodb+srv://alapatinaveen18:S4GAi8Mr2kFdhisy@cluster0.wfkzfmx.mongodb.net/cluster0?retryWrites=true&w=majority';

mongoose.connect(db)
    .then(()=>{
        console.log("DB connected to ", db);
        app.listen(8082, ()=>{
            console.log(" App is listening to ", 8082);
        })
    })
    .catch((er)=>{
        console.log("Something went wrong", er);
    })