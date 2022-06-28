var Movimento = require('../models/movimento');

module.exports.listar = function() {
    return Movimento
        .find({})
        .sort({data: -1})
        .exec();
}

module.exports.listarPorTipo = function(t) {
    return Movimento
        .find({tipo: t})
        .exec();
}

module.exports.inserir = function (m) {
    var novo = new Movimento(m);
    return novo.save();
}