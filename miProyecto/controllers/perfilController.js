
const perfil = require('../data/perfil');
const perfilController = {
    detalleUsuario: function (req,res) {
        let id = req.params.id;
        let resultado = perfil.detalleUsuario(id);
        let posteos= perfil.posteosDeCadaUsuario(id)
        console.log(resultado); 
        return res.render('detalleUsuario', {usuario:resultado, posteos:posteos});
    
    },
    register:(req,res)=>{
        res.render('registracion')
    },

    index: function (req, res) {
        return res.render('index', {posteos:perfil.posteos})
    },
    login: function(req, res){
        return res.render('login')
    },
    miPerfil: function(req, res){
        let id = req.params.id
        let usuario = perfil.detalleUsuario(id)
        let resultado = perfil.misPosteos(id)
        return res.render('miPerfil',{usuario: usuario, posteos: resultado} )
    }
}
module.exports = perfilController