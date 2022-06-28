var Pagamento = require('../models/pagamento');

module.exports.listar = function() {
    return Pagamento
        .find({})
        .exec();
}

module.exports.consultar = function(id) {
    return Pagamento
        .findOne({fracao: id})
        .exec();
}

module.exports.consultarMes = function(m) {
    var query = {};
    query[m] = 0;
    
    return Pagamento
        .find({query})
        .exec();
}

module.exports.inserir = function (p) {
    return Pagamento
        .findByIdAndUpdate({_id: p._id}, p, {new: true})
        .exec();
}
