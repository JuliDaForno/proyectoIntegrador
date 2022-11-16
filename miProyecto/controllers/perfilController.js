const db = require('../database/models');
const usuario = db.Usuario
const op = db.Sequelize.Op;
const bcrypt=require('bcryptjs')



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
       if(req.body.nombre== ""){ console.log('nombre');
            errors.message="El campo nombre esta vacío";
            res.locals.errors=errors;
            return res.render('registracion');
        }
        else if (req.body.apellido==""){
            errors.message="El campo apellido esta vacío";
            res.locals.errors=errors;
            return res.render('registracion');
        }
        else if (req.body.usuario==""){
            errors.message="El campo usuario esta vacío";
            res.locals.errors=errors;
            return res.render('registracion');
        }
        else if (req.body.email==""){
            errors.message="El campo email esta vacío";
            res.locals.errors=errors;
            return res.render('registracion');
        }
        else if (req.body.password==""){
            errors.message="El campo password esta vacío";
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
            //pregunto si no existe
            let condicion = {where:[{email: req.body.email}]}
            console.log(req.file);
            usuario.findOne(condicion)
            .then((result)=>{
                
                if(result!=undefined){
                    errors.message="El mail ya pertenece a un usuario existente";
                    res.locals.errors=errors;
                    return res.render('registracion');
  
                }else{
                    
                    let usuarioAGuardar = req.body;
                    let user ={
                        nombre:usuarioAGuardar.nombre,
                        apellido: usuarioAGuardar.apellido,
                        usuario:usuarioAGuardar.usuario,
                        email: usuarioAGuardar.email,
                        contrasenia: bcrypt.hashSync(usuarioAGuardar.password,10),
                        foto: req.file.filename,
                        nacimiento: usuarioAGuardar.fecha,
                        dni: usuarioAGuardar.dni
            
                    }
                    usuario.create(user)
                .then((result)=>{
                    return res.redirect ('/users/login')
        
                })
                .catch((err)=>{
                    console.log(err)
                })   
                }

            })
            .catch((error)=>{
               console.log(error);
            })
    }
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
                let passEncriptada = bcrypt.compareSync(info.password, result.contrasenia);
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
    miPerfil: function(req, res) {
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
                return res.render('miPerfil', { usuario: result })
            })
            .catch((err) => {
                return res.redirect('/')
            })
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