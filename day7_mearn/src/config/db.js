
const mongoose = require('mongoose');

module.exports = ()=>{
     return mongoose.connect("mongodb+srv://mearnstack:mearn123@cluster0.wvzrn.mongodb.net/nem101?retryWrites=true&w=majority")
}

//mongodb+srv://mearnstack:<password>@cluster0.wvzrn.mongodb.net/?retryWrites=true&w=majority