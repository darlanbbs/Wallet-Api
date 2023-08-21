const mongoose = require('mongoose');
const { Schema } = mongoose;

const TransactionSchema = new Schema({
    value: {type:Number,required:true,},
    description: {type:String,required:true,},
    createdAt: { type: Date, default: Date.now, },
    type: {type:String,required:true,},
    userId:{type:Schema.Types.ObjectId,ref:'User',required:true,},
});

module.exports = mongoose.model('transaction', TransactionSchema);