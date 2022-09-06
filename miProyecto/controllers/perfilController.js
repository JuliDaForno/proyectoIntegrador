const { usuarios } = require('../data/perfil');
const perfil = require('../data/perfil');
const perfilControllerr ={
    detalleUsuario: function (req,res) {
        let perfilUsuario = req.params.perfilUsuario
        let resultado = perfil.detalleUsuario(detalleUsuario)
        return res.render('perfil', {usuarios: resultado})   
    },
}
module.exports = perfilControllerr