const db = require('../database/models');
const usuario = db.Usuario
const op = db.Sequelize.Op;
const perfilController = {
    //Buscar por el id de usuario
    detalleUsuario: function (req, res) {
        let id = req.params.id;
        let relaciones = {
            include: [
                {
                    all: true,
                    nested: true
                }
            ]
        };
        usuario.findByPk(id, relaciones)
            .then((result) => {
                //res.send(result)
                return res.render('detalleUsuario', { usuario: result })
            })
            .catch((err) => {
                return res.redirect('/')
            })



    },
    register: (req, res) => {
        res.render('registracion')
    },

    index: function (req, res) {
        return res.render('index', { posteos: perfil.posteos })
    },
    login: function (req, res) {
        return res.render('login')
    },
    miPerfil: function (req, res) {
        let id = req.params.id
        let usuario = perfil.detalleUsuario(id)
        let resultado = perfil.misPosteos(id)
        return res.render('miPerfil', { usuario: usuario, posteos: resultado })
    },
    editarPerfil: function (req, res) {
        return res.render('editarPerfil', { usuario: perfil.usuarios, indice: req.params.id }) //para pasar un parametro lo pasamos como objeto literal
    }
}
module.exports = perfilController