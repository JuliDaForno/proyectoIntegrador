const db = require('../database/models');
const usuario = db.Usuario
const op = db.Sequelize.Op;
const bycript=require('bcryptjs')
const perfilController = {
    //Buscar por el id de usuario
    detalleUsuario: function (req, res) {
        let id = req.params.id;
        let relaciones = {
            include: [
                {
                    all: true,
                    nested: true
                }
            ]
        };
        usuario.findByPk(id, relaciones)
            .then((result) => {
                //res.send(result)
                return res.render('detalleUsuario', { usuario: result })
            })
            .catch((err) => {
                return res.redirect('/')
            })



    },
    register: (req, res) => {
        return res.render('registracion')
    },

    store: (req,res)=>{
        let usuarioAGuardar = req.body;
        let user ={
            email: usuarioAGuardar.email,
            password: bcrypt.hashSync(usuarioAGuardar.password,10),
            img: usuarioAGuardar.fotoperfil,
            nacimiento: usuarioAGuardar.fecha,
            dni: usuarioAGuardar.dni
        }
        usuario.register(user)
        .then((result)=>{
            return res.redirect ('/users/login')
        })
        .catch((err)=>{
            return console.log(err)
        })
    },

   


    login: function (req, res) {
        return res.render('login')
    },
    loginUsuario: function(req,res){
        let info = req.body
        console.log(info.remeberme);

        let filtro ={
            where:[{email: info.email}]
        }
        usuario.findOne(filtro)
        .then((result)=>{
            if(result != null){
                let passEncriptada = /*bycript.compareSync(info.password, result.password);*/true
                if(passEncriptada){
    
                    // req.session.user = result.dataValues;
                    console.log('data');
                    console.log(info.rememberme);
                    if(info.rememberme != undefined){
                        res.cookie('usuarioId', result.dataValues.id, {maxAge: 1000 * 60 * 10});
                    }
                    return res.redirect('/');
                   
                }else{
                    return res.send('La contraseña no coincide');
                }
            }
            res.send({result})
        })
        .catch(error => {
            console.log(error)
        })
    },
    miPerfil: function (req, res) {
        let id = req.params.id
        let usuario = perfil.detalleUsuario(id)
        let resultado = perfil.misPosteos(id)
        return res.render('miPerfil', { usuario: usuario, posteos: resultado })
    },
    editarPerfil: function (req, res) {
        return res.render('editarPerfil', { usuario: perfil.usuarios, indice: req.params.id }) //para pasar un parametro lo pasamos como objeto literal
    },
    logout: (req,res)=>{
        //destruir la session y cookie
        return res.render('login');
    }
}
module.exports = perfilController