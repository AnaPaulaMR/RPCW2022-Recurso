var mongoose = require('mongoose');

var fracaoSchema = new mongoose.Schema({
    fracao: String,
    permilhagem: Number,
    mensalidade: Number
});

module.exports = mongoose.model('fracao', fracaoSchema);
