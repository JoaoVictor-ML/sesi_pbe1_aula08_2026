const clientes = require("../../dados/clientes.json")

const criar = (req, res) => { 
    const dados = req.body
    dados.id = Number(clientes[clientes.length - 1].id + 1) //AutoIncrement
    clientes.push(dados)
    res.status(201).json(dados)
}

const listar = (req, res) => { 
    res.json(clientes)
}

const alterar = (req, res) => { }

const excluir = (req, res) => { }

module.exports = {
    criar, listar, alterar, excluir
}