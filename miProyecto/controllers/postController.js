const db = require('../database/models')
const posteo = db.posteo
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
    create: function(req,res){
        res.render('agregarPost')
    },
    store: (req,res)=>{
        let postAGuardar = req.body;
        return res.redirect('/');

    },
    update: (req, res) =>{
        let id = req.params.id;
        posteo.findByPk(id)
        .then((result)=>{
            return res.render ('editar')
        })
    },
showOne:(req, res) =>{},
editarPerfil: (req, res) => {},
destroy:(req, res) =>{},
    
}
module.exports = postController