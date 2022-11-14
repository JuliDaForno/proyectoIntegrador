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
    //mostrar el formulario de usuario
    create: (req, res) => {
        return res.render('registracion')
    },

    //guardar el perfil
    store: (req,res)=>{
        let errors={};
        if(req.body.nombre==""){
            errors.message="El campo nombre esta vacio";
            res.locals.errors=errors;
            return res.render('registracion');
        }
        else if (req.body.apellido==""){
            errors.message="El campo apellido esta vacio";
            res.locals.errors=errors;
            return res.render('registracion');
        }
        else if (req.body.usuario==""){
            errors.message="El campo apellido esta vacio";
            res.locals.errors=errors;
            return res.render('registracion');
        }
        else if (req.body.email==""){
            errors.message="El campo email esta vacio";
            res.locals.errors=errors;
            return res.render('registracion');
        }
        else if (req.body.password==""){
            errors.message="El campo password esta vacio";
            res.locals.errors=errors;
            return res.render('registracion');
        }
        else if (req.body.password.length <= 3){
            errors.message="El campo password debe ser de 3 o mas caracteres";
            res.locals.errors=errors;
            return res.render('registracion');
        }
        else if (req.file== undefined){
            errors.message="El campo foto perfil esta vacio";
            res.locals.errors=errors;
            return res.render('registracion');
        }
        else if (req.body.fecha==""){
            errors.message="El campo fecha esta vacio";
            res.locals.errors=errors;
            return res.render('registracion');
        }
        else if (req.body.dni==""){
            errors.message="El campo dni esta vacio";
            res.locals.errors=errors;
            return res.render('registracion');
        }
        else{
            let condicion = {where:[{email: info.email}]}
            db.Usuario.findOne(condicion)
                // where:[{email: info.email},{usuario: info.usuario},{password:info.password}]
                
            
            .then((usuario)=>{
if(usuario !=null){
    errors.message="El usuario o email ya existe";
    res.locals.errors=errors;
return res.render('registracion');
}
else{
   let usuarioAGuardar = req.body;
let user ={
    email: usuarioAGuardar.email,
    password: bcrypt.hashSync(usuarioAGuardar.password,10),
    img: usuarioAGuardar.fotoperfil,
    nacimiento: usuarioAGuardar.fecha,
    dni: usuarioAGuardar.dni
} 
}

    usuario.create(user)
        .then((result)=>{
            return res.redirect ('/users/login')
        })
        .catch((err)=>{
            return console.log(err)
        })

    })
}
// let usuarioAGuardar = req.body;
        },
    login: function (req, res) {
        if (req.session.user!= undefined) {
            return res.redirect('/')
        } else {
            return res.render('login')
        }
    },
    loginUsuario: function(req,res){
        let errors={};
        let info = req.body
        let filtro ={
            where:[{email: info.email}]
        }
      usuario.findOne(filtro)
        .then((result)=>{
            if(result != null){
                console.log(result)
                let passEncriptada = bycript.compareSync(info.password, result.contrasenia);
                if(passEncriptada){
                    req.session.user = result.dataValues;
                    if(info.rememberme != undefined){
                        res.cookie('usuarioId', result.dataValues.id, {maxAge: 1000 * 60 * 10});
                    }
                    return res.redirect('/');
                   
                }else{
                    errors.message= "La contraseña no coincide";
                    res.locals.errors=errors;
                    return res.render('login');
                }
            }
          else{
            errors.message= "El email o contraseña es invalido";
            res.locals.errors=errors;
            return res.render('login');
          }
        })
        .catch(error =>{
            console.log(error);
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
        req.session.destroy();
        /* Destruir la cookie */
        res.clearCookie('userId');

        res.locals.user = undefined;

        return res.render('login');
    },
    update: (req, res) =>{
        let id = req.params.id;
        usuario.findByPk(id)
        .then((result)=>{
            return res.render('editarPerfil', {usuario: result.dataValues})
        })
        .catch(error)

    }

}
module.exports = perfilController;