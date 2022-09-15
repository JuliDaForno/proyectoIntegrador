
const perfil = require('../data/perfil');
const perfilController = {
    detalleUsuario: function (req,res) {
        let id = req.params.id;
        let resultado = perfil.detalleUsuario(id);
        let posteos = perfil.detallePosteo(id);
        console.log(resultado);
        return res.render('detalleUsuario', {usuario:resultado, posteos: perfil.posteos})   
       

    },
    register:(req,res)=>{
        res.render('registracion')
    },

    index: function (req, res) {
        return res.render('index', {posteos : perfil.posteos})
    },
    login: function(req, res){
        return res.render('login')
    },
    miPerfil: function(req,res){
        return res.render('miPerfil')
    }
}
module.exports = perfilController