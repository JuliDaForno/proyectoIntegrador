
const perfil = require('../data/perfil');
const perfilController = {
    detalleUsuario: function (req,res) {
        let id = req.params.id;
        let resultado = perfil.detalleUsuario(id);
        console.log(resultado);
        return res.render('detalleUsuario', {usuario:resultado, posteos:posteos})   

    },
    register:(req,res)=>{
        res.render('registracion')
    },

    index: function (req, res) {
        return res.render('index', {posteos : perfil.posteos})
    }
}
module.exports = perfilController