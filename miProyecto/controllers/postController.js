const perfil = require('../data/perfil')
const postController = {
    detallePosteo: function(req,res){
        let id = req.params.id
        let post= perfil.detallePosteo(id);
        return res.render('detallePost', {post:post})
    },
    agregar: function(req,res){
        res.render('agregarPost')
    },
    comentarios: function(req, res){
        
    }
    
}
module.exports = postController