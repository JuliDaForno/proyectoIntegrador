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
module.exports = postController