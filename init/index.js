const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require('../models/listing.js');

main().then(()=>{console.log('server connected');
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');

  
}

const initDB = async()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj, owner:'6a9f2877011dcd4e1da1f589'}))
    await Listing.insertMany(initData.data);
    console.log('data was initialised');
    
};

initDB();