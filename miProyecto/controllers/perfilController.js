const { usuarios } = require('../data/perfil');
const perfil = require('../data/perfil');
const perfilControllerr ={
    detalleUsuario: function (req,res) {
        let perfilUsuario = req.params.perfilUsuario
        let resultado = perfil.nombre(perfilUsuario)
        return res.render('detalleUsuario', {usuarios: resultado})   
    },
}
module.exports = perfilControllerr