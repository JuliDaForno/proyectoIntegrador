const { production } = require('../database/config/config')
const db = require('../database/models')
const { post } = require('../routes/users')
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
        })
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

        let info = req.body; //guardamos los datos
        let imagen = req.file.filename;
        
        let posteoNuevo = {
            usuario: info.usuario,
            post: imagen,
            imagen: info.post,
            usuario_id: req.session.user.id
        } 
        Posteo.update( posteoNuevo,{where: {id: req.params.id}})
        .then((resultado) => {res.redirect("/")})    
    },

showOne:(req, res) =>{},
editarPerfil: (req, res) => {},
destroy:(req, res) =>{},
    
}
module.exports = postController;