
const perfil = require('../data/perfil');
const perfilControllerr = {
    detalleUsuario: function (req,res) {
        let id = req.params.id;
        let resultado = perfil.detalleUsuario(id);
        return res.render('detalleUsuario', {usuarios:resultado})   
    },
}
module.exports = perfilControllerr