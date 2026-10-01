const produtos = require("../../dados/produtos.json")

const criar = (req, res) => { 
    const dados = req.body
    dados.id = Number(produtos[produtos.length - 1].id + 1) //AutoIncrement
    produtos.push(dados)
    res.status(201).json(dados)
}

const listar = (req, res) => { 
    res.json(produtos)
}

const alterar = (req, res) => { 
    const id = req.params.id
    const dados = req.body
    const chaves = Object.keys(dados)
    let status = 0

    const produto = produtos.find((p) => p.id == id)
    chaves.forEach((chave) => {
        produto[chave] = dados[chave]
        status = 1
    })

    if(status == 1) {
        res.send("produto alterado com sucesso")
    }else{
        res.status(404).send("Erro ao alterar o produto")
    }
    
}

const excluir = (req, res) => { 
    const id = req.params.id
    let status = 0

    produtos.forEach((produto, indice) => {
       if(produto.id == id){
        status = 1
        produtos.splice(indice, 1)
       }
    })
    if(status == 1) {
        res.send("produto excluido com sucesso")
    }else{
        res.status(404).send("Erro ao excluir produto")
    }

}

module.exports = {
    criar, listar, alterar, excluir
}