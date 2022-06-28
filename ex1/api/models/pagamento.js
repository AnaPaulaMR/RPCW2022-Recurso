var mongoose = require('mongoose');

var pagamentoSchema = new mongoose.Schema({
    fracao: String,
    jan: Number,
    fev: Number,
    mar: Number,
    abr: Number,
    mai: Number,
    jun: Number,
    jul: Number,
    ago: Number,
    set: Number,
    out: Number,
    nov: Number,
    dez: Number
});

module.exports = mongoose.model('pagamento', pagamentoSchema);
