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
            console.log(result);
            return res.render('index', {posteos: result})
            
        })
        .catch((error)=>{
            return console.log(error)
        });
        


        
    },
    search: (req, res)=>{
        let id= req.params.id
        let busqueda = req.query.busqueda
        let relaciones = {
            include:[
                {
                    all:true,
                    nested: true
                }
            ]
        };
        posteo.findAll({relaciones,
        order: [['createdAt', 'ASC']],
        limit: 10, where:{
                
                pie_post: {
                    [op.like]: "%" + busqueda + "%"
                }
        }})
        .then((postsBuscados) =>{
            
            if(postsBuscados.length <= 0){
                res.locals.errorBuscador = 'No hay resultados para tu busqueda'
                res.render('resultadoBusqueda')
            }else{
                console.log(postsBuscados[1].dataValues)
                res.render('resultadoBusqueda', {posts: postsBuscados})
            }
        })
    } ,

}
module.exports = homeController  