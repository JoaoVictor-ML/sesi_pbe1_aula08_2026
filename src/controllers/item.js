const itens = require("../../dados/itens.json")

const criar = (req, res) => { 
    const dados = req.body
    dados.id = Number(itens[itens.length - 1].id + 1) //AutoIncrement
    itens.push(dados)
    res.status(201).json(dados)
}

const listar = (req, res) => { 
    res.json(itens)
}

const alterar = (req, res) => { 
    const id = req.params.id
    const dados = req.body
    const chaves = Object.keys(dados)
    let status = 0

    const item = itens.find((p) => p.id == id)
    chaves.forEach((chave) => {
        item[chave] = dados[chave]
        status = 1
    })

    if(status == 1) {
        res.send("item alterado com sucesso")
    }else{
        res.status(404).send("Erro ao alterar o item")
    }
    
}

const excluir = (req, res) => { 
    const id = req.params.id
    let status = 0

    itens.forEach((item, indice) => {
       if(item.id == id){
        status = 1
        itens.splice(indice, 1)
       }
    })
    if(status == 1) {
        res.send("item excluido com sucesso")
    }else{
        res.status(404).send("Erro ao excluir o item")
    }

}

module.exports = {
    criar, listar, alterar, excluir
}