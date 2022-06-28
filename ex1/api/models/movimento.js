var mongoose = require('mongoose');

var movimentoSchema = new mongoose.Schema({
    numero: String,
    tipo: String,
    data: String,
    valor: Number,
    entidade: String,
    descricao: String
});

module.exports = mongoose.model('movimento', movimentoSchema);
