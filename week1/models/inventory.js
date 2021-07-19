const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InventorySchema = new Schema({
    item:{
        type:String,
        required: true
    },
    name:{
        type: String
    },
    price:{
        type: Number
    },
    inStock:{
        type: Boolean
    }
});
module.exports = mongoose.model('Inventory',InventorySchema)