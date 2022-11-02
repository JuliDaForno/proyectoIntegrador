const perfil = require('../database/models')
const postController = {
    detallePosteo: function(req,res){
        let id = req.params.id
        let post= perfil.detallePosteo(id);
        let comentarios = perfil.comentario
        return res.render('detallePost', {post:post, comentario:comentarios})
    },
    agregar: function(req,res){
        res.render('agregarPost')
    },
    
    
}
module.exports = postController