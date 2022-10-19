const data = require('../models')
const usuario = data.Usuario;
const op = data.Sequelize.Op;

const homeController={
    index: function (req,res) {
        usuario.findAll(criterios)
        .then((result)=>{
            return res.render('index', {posteos: result})
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
    } 
}
module.exports = homeController  