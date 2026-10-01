const pedidos = require("../../dados/pedidos.json")
const itens = require("../../dados/itens.json")

function calcTotais() {
    const id = req.params.id
    let soma = 0
    const itensFiltrados = itens.filter(item => item.pedido_id == id)
    itensFiltrados.forEach(i => { 
        soma += i.quantidade * i.preco
    })
}

const criar = (req, res) => { 
    const dados = req.body
    dados.id = Number(pedidos[pedidos.length - 1].id + 1) //AutoIncrement
    pedidos.push(dados)
    res.status(201).json(dados)
}

const listar = (req, res) => { 
    calcTotais()
    res.json(pedidos)
}

const alterar = (req, res) => { 
    const id = req.params.id
    const dados = req.body
    let status = 0

    pedidos.forEach((pedido) => {
        if(pedido.id == id){
            pedido.cliente_id = dados.cliente_id
            pedido.data = dados.data
            status = 1
        }
    })

    if(status == 1) {
        res.send("Pedido atualizado com sucesso")
    }else{
        res.status(404).send("Erro ao atualizar pedido")
    }
}

const excluir = (req, res) => { 
    const id = req.params.id
    let status = 0

    pedidos.forEach((pedido, indice) => {
       if(pedido.id == id){
        status = 1
        pedidos.splice(indice, 1)
       }
    })
    if(status == 1) {
        res.send("Pedido excluido com sucesso")
    }else{
        res.status(404).send("Erro ao excluir pedido")
    }

}

module.exports = {
    criar, listar, alterar, excluir
}