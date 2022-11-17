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
    if (!req.session.user) {
        throw Error('no estas autorizado a editar el posteo') //validaciones, si o se encuentra el usuario, no te deja editar
    }

        let id = req.params.id;
        posteo.findByPk(id)
        .then((result)=>{
            return res.render ('editar')
        })

       
    },
    updatePost: (req, res) =>{
   
        let filtro = {
            where: [{id: req.body.id}]
        }
        let info = req.body;

        usuario.update (info, filtro)
        if (req.session.user != undefined) {
            //hacer la logica para que se agregue un 
            return res.redirect('/')
        } else {
            return res.render('/users/login')
        }
    },

showOne:(req, res) =>{},
editarPerfil: (req, res) => {},
destroy:(req, res) =>{},
    
}
module.exports = postController;