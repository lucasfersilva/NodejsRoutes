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
        const{nome, email, senha}= req.body
        const usuarios= await User.create({
            nome, 
            email, 
            senha
        })
        return res.json(usuarios)
    },
    async update(req,res){
        return res.json({message: "altera um usuario"})
    },
    async delete(req,res) {
        return
        res.json({message: "apaga um usuario"})
    }
}
