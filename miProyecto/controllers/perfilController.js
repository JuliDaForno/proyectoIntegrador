
const perfil = require('../data/perfil');
const perfilController = {
    detalleUsuario: function (req,res) {
        let id = req.params.id;
        let resultado = perfil.detalleUsuario(id);
        console.log(resultado);
        return res.render('detalleUsuario', {usuario:resultado})   

    },
    detallePosteo: function(req,res){
        let id_usuario = req.params.id_usuario
        let posteo= perfil.detallePosteo(id_usuario);
        return res.render('detallePost', {post:posteo})
    },
    register:(req,res)=>{
        res.render('registracion')
    },

    index: function (req, res) {
        return res.render('index', {posteos : perfil.posteos})
    }
}
module.exports = perfilController