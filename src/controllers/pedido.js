const pedidos = require("../../dados/pedidos.json")

function subtotais(){
    pedidos.forEach(p => {
        p.subtotal = p.quantidade * p.preco
    })
}

const criar = (req, res) => { 
    const dados = req.body
    dados.id = Number(pedidos[pedidos.length - 1].id + 1) //AutoIncrement
    pedidos.push(dados)
    res.status(201).json(dados)
}

const listar = (req, res) => { 
    subtotais()
    res.json(pedidos)
}

const alterar = (req, res) => { }

const excluir = (req, res) => { }

module.exports = {
    criar, listar, alterar, excluir
}