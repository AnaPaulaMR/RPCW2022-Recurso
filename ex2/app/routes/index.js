var express = require('express');
var router = express.Router();
var axios = require('axios')

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get('http://localhost:3001/api/movimentos?groupBy=Receita')
  .then(dados => {
    var receita = 0;

    dados.data.forEach(d => {
      receita += d.valor;      
    });

    axios.get('http://localhost:3001/api/movimentos?groupBy=Despesa')
    .then(dados2 => {
      var despesa = 0;
  
      dados2.data.forEach(d => {
        despesa += d.valor;      
      });  
      
      res.render('index', {recebido: receita, pago: despesa})
    })
    .catch(e => res.render('error', {error: e}))
  })
  .catch(e => res.render('error', {error: e}))
});

router.get('/movimentos', function(req, res, next) {
  axios.get('http://localhost:3001/api/movimentos')
  .then(dados => {    
    res.render('movimentos', {lista: dados.data})
  })
  .catch(e => res.render('error', {error: e}))
});

router.get('/pagamentos', function(req, res, next) {
  axios.get('http://localhost:3001/api/pagamentos')
  .then(dados => {    
    res.render('pagamentos', {lista: dados.data})
  })
  .catch(e => res.render('error', {error: e}))
});

module.exports = router;
