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

module.exports = postController