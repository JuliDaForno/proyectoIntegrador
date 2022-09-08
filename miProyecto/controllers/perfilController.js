
const perfil = require('../data/perfil');
const perfilControllerr = {
    detalleUsuario: function (req,res) {
        let usuario = req.params.usuario;
        let resultado = perfil.detalleUsuario(usuario);
        return res.render('detalleUsuario', {usuarios:resultado})   
    },
}
module.exports = perfilControllerr