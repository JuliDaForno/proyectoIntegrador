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

        //empiezo a trabajar con agregarPost

        let datosUsuario = req.body
    
            let errors = {}
            console.log(datosUsuario);
            if(req.body.usuario == ""){
                errors.message = "el usuario esta vacio"
                res.locals.errors = errors
                return res.render('index', {usuario_id: req.params.id})
            }else if(req.body.imagen == ""){
                errors.message = "debes subir una imagen"
                res.locals.errors = errors
                return res.render('index', {usuario_id: req.params.id})
            }else if(req.body.post == ""){
                errors.message = "el post esta vacio"
                res.locals.errors = errors
                return res.render('index', {usuario_id: req.params.id})
            }
            else{
                let nuevosDatos = {
                    id_usuarios: req.body.usuario,
                    image_name: req.file.filename,
                    pie_post: req.body.post
                }
                Posteo.update( nuevosDatos,{where: {id: req.params.id}})
                .then((resultado) => {res.redirect("/")})
            } 
    },

showOne:(req, res) =>{},
editarPerfil: (req, res) => {},
destroy:(req, res) =>{},
    
}
module.exports = postController;