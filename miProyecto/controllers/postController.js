<<<<<<< HEAD
const postController = {

    agregar: function(req, res){
        return res.render('agregarPost')
    },

    detalle: function(req, res){
        let idPost = req.params.idPost

        //ahora llamo al db
        const post = {
            id_usuario: 2,
            id: 6,
            imagen: 'images/adeleposteo2.jpg',
            nombre: 'Juan Perez'
        }

        return res.render('detallePost', {post: post})
    }

}

=======
const perfil = require('../data/perfil')
const postController = {
    detallePosteo: function(req,res){
        let idPost = req.params.id
        let post= perfil.detallePosteo(idPost);
        return res.render('detallePost', {post:post})
    },
    agregar: function(req,res){
        res.render('agregarPost')
    }
}
>>>>>>> e88b060f7d4eeef27100d862f72be6e2c440fa85
module.exports = postController