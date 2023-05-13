const mongoose = require('mongoose');

async function connect() {

    try{
        
        await mongoose.connect('mongodb://127.0.0.1:27017/teamwork_4',{
        useNewUrlParser: true,
        useUnifiedTopology: true,

        });
        console.log('Connect successfully!');
    }
    catch(err){
    console.log('Failed!!!');   
    }
}

module.exports = { connect };