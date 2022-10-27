const data = require('../models')
const posteo = data.Posteo;
const op = data.Sequelize.Op;

const homeController={
    index: function (req,res) {
        posteo.findAll()
        .then((result)=>{
            return res.render('index', {posteos: result})
        }).catch((error)=>{
            return console.log(error)
        })

        
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
        usuario.findByPk(id)
        .then((result)=>{
            return res.render('resultadoBusqueda', {usuario:result})
        })
        .catch((err)=>{
            return res.redirect('/')
        });
    } 
}
module.exports = homeController  