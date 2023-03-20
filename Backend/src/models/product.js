const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    prod1name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        
    },
    prod2name: {
        type: String,
        required: false,
    },
    price1: {
        type: Number,
        required: false,
    },
    prod3name: {
        type: String,
        required: false,
       
    },
    price2: {
        type: Number,
        required: false,
    },
    prod4name: {
        type: String,
        required: false,
       
    },
    price3: {
        type: Number,
        required: false,
    }
    ,
    prod5name: {
        type: String,
        required: false,
       
    },
    price4: {
        type: Number,
        required: false,
    }
    ,
    prod6name: {
        type: String,
        required: false,
       
    },
    price5: {
        type: Number,
        required: false,
    }
    ,
    PhoneNumber: {
        type: Number,
        required: true,

    },
    PinCode: {
        type: Number,
        required: true,
    }
    ,
    City: {
        type: String,
        required: true,
       
    },
    AdhaarNumber: {
        type: Number,
        required: true,
    },


})



const Product = new mongoose.model("Product", productSchema);

module.exports = Product;