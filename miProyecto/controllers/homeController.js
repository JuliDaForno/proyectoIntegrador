const db = require('../database/models')
const posteo = db.Posteo;
const usuario = db.Usuario;
const op = db.Sequelize.Op;

const homeController={
    index: function (req,res) {
        let relaciones = {
            include:[
                {
                all:true,
                nested:true,
            }
            ]

        };
        posteo.findAll(relaciones)
        .then((result)=>{
            //res.send(result)
            return res.render('index', {posteos: result})
            
        })
        .catch((error)=>{
            return console.log(error)
        });
        


        
    },
    search: (req, res)=>{
        let id= req.params.id
        let relaciones = {
            include:[
                {
                    all:true,
                    nested: true
                }
            ]
        };
        usuario.findByPk(id, relaciones)
        .then((result)=>{
            return res.render('resultadoBusqueda', {usuario:result})
        })
        .catch((err)=>{
            return res.redirect('/')
        });
    } ,

}
module.exports = homeController  