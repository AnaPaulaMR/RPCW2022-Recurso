var Fracao = require('../models/fracao');

module.exports.consultar = function(id) {
    return Fracao
        .findOne({fracao: id})
        .exec();
}