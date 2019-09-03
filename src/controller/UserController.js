const User = require("../model/User");

module.exports = {
    async index(req, res) {
        return res.json({message: "lista todos os usuarios"})
    },
    async show(req, res) {
        return
        res.json({message:"Lista um usuário"})
    }, 
    async store(res,res){
        return
        res.json({message:"Grava um usuario"})
    },
    async update(req,res){
        return res.json({message: "altera um usuario"})
    },
    async delete(req,res) {
        return
        res.json({message: "apaga um usuario"})
    }
}
