var express = require('express');
var router = express.Router();

var Movimento = require('../controllers/movimento');
var Pagamento = require('../controllers/pagamento');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET /api/movimentos
// GET /api/movimentos?groupBy=tipo
// GET /api/movimentos?groupBy=entidade
router.get('/api/movimentos', function(req, res, next) {
  if (req.query['groupBy'] === 'entidade') {
    Movimento.listarPorTipo('Receita')
    .then(dados => {
      var porEnt = {}

      dados.forEach(d => {
        var ent = d.entidade;
        if (porEnt[ent] == undefined) {
          porEnt[ent] = 0;
        }
        porEnt[ent] += d.valor;
      })

      Movimento.listarPorTipo('Despesa')
      .then(dados2 => {  
        dados2.forEach(d => {
          var ent = d.entidade;
          if (porEnt[ent] == undefined) {
            porEnt[ent] = 0;
          }
          porEnt[ent] += d.valor;
        })
  
        res.status(200).jsonp(porEnt);
      })
      .catch(err => {
        res.status(503).jsonp({ error: err });
      });
    })
    .catch(err => {
      res.status(502).jsonp({ error: err });
    });
  }
  else if (req.query['groupBy'] !== undefined) {
    Movimento.listarPorTipo(req.query['groupBy'])
    .then(dados => {
      res.status(200).jsonp(dados);
    })
    .catch(err => {
      res.status(501).jsonp({ error: err });
    });
  }
  else {
    Movimento.listar()
    .then(dados => {
      res.status(200).jsonp(dados);
    })
    .catch(err => {
      res.status(500).jsonp({ error: err });
    });
  }
});

// GET /api/pagamentos 
// GET /api/pagamentos?status=mês 
router.get('/api/pagamentos', function(req, res, next) {
  if (req.query['status'] !== undefined) {
    Movimento.consultarMes(req.query['status'])
    .then(dados => {
      res.status(200).jsonp(dados);
    })
    .catch(err => {
      res.status(504).jsonp({ error: err });
    });
  }
  else {
    Pagamento.listar()
    .then(dados => {
      res.status(200).jsonp(dados);
    })
    .catch(err => {
      res.status(505).jsonp({ error: err });
    });
  }
});

// GET /api/pagamentos/:id 
router.get('/api/pagamentos/:id', function(req, res, next) {
  Pagamento.consultar(req.params.id)
  .then(dados => {
    res.status(200).jsonp(dados);
  })
  .catch(err => {
    res.status(506).jsonp({ error: err });
  });
});

// POST /api/movimentos
router.post('/api/movimentos', function(req, res){
  Movimento.inserir(req.body)
    .then(dados => res.status(201).jsonp({dados: dados}))
    .catch(e => res.status(507).jsonp({error: e}))
});

// POST /api/pagamentos
router.post('/api/pagamentos', function(req, res){
  Pagamento.inserir(req.body)
    .then(dados => {
      res.status(201).jsonp({dados: dados});
    })
    .catch(e => res.status(508).jsonp({error: e}))
});

module.exports = router;
