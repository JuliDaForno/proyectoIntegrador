const db = require('../database/models')
const postController = {
    detallePosteo: function(req,res){
        let id = req.params.id
        let relaciones = {
            include:[
                {
                all:true,
                nested:true,
            }
            ]}

        db.Posteo.findByPk(id,relaciones)
        .then((posteo)=>{
            return res.render('detallePost', {posteo: posteo })
            res.send(posteo)
        })
        // let post= perfil.detallePosteo(id);
        // let comentarios = perfil.comentario
         

    },
    agregar: function(req,res){
        res.render('agregarPost')
    },
    
    
}
module.exports = postController