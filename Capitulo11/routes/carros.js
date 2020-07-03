let express = require('express');
const router = express.Router();

const CarroDB = require('../model/CarroDB');

/*
// GET em / -> Antes de realizar o tratamento do erro vindo do MySQL
router.get('/', function(req, res){
    CarroDB.getCarros(function(carros){
        res.json(carros);
    });
}); */

// GET em / -> Alterado para trazer o erro do MySQL
router.get('/', function(req, res, next){
    CarroDB.getCarros(function(error, carros){
        if (error) {
            console.log("Erro de SQL: " + error.message);
            return next(error);
        }
        res.json(carros);
    });
});

// GET em /id
router.get('/:id(\\d+)', function(req, res){
    let id = req.params.id;
    CarroDB.getCarroById(id, function(carro){
        res.json(carro);
    });
});

// DELETE em /id
router.delete('/:id(\\d+)', function(req, res){
    let id = req.params.id;
    console.log("Deletar Carro: " + id);
    CarroDB.delete(id, function(affectedRows) {
        res.json({ msg: "Carro deletado com sucesso."});
    });
});

// GET em /tipo (clássicos, esportivos, luxo)
router.get('/:tipo', function(req, res){
    let tipo = req.params.tipo;
    CarroDB.getCarrosByTipo(tipo, function(carros){
        res.json(carros);
    });
});

// POST para salvar um carro
router.post('/', function(req, res){
    // Carro enviado no formato JSON
    let carro = req.body;
    CarroDB.save(carro, function(carro){
        res.json(carro);
    });
});

// PUT para atualizar um carro
router.put('/', function(req, res) {
    // Carro enviado no formato JSON
    let carro = req.body;
    CarroDB.update(carro, function(carro) {
        //res.json(carro);
        res.json({msg: 'Carro atualizado com sucesso.'});
    });
});

// Exporta as rotas para ser atualizado em outro arquivo
module.exports = router;
