// firstname: 'Gal',lastname:'Dahan',email:'963gal963@gmail.com' ,id: '207232349'
// firstname: 'omri ',lastname:'rachmani',id:'206924672'

const mongoose = require('mongoose');

const costSchema = new mongoose.Schema({
    user_id: { type: Number, required: true },
    year: { type: Number, min: 1970, max: 2100 },
    month: { type: Number, min: 0, max: 11 },
    day: { type: Number, min: 0, max: 31 },
    description: { type: String, maxlength: 100 },
    category: { type: String, enum: ['food', 'health', 'housing', 'sport', 'education', 'transportation', 'other'] },
    sum: { type: Number, min: 0 }
});

const Cost = mongoose.model('Cost', costSchema);

module.exports = Cost;
