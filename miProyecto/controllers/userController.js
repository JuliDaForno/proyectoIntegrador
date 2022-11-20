const db = require('../database/models');
const usuario = db.Usuario
const op = db.Sequelize.Op;
const bcrypt=require('bcryptjs')



const userController = {
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
console.log(req.body);
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
        else if (req.body.contrasenia==""){
            errors.message="El campo password esta vacío";
            res.locals.errors=errors;
            return res.render('registracion');
        }
        else if (req.body.contrasenia.length <= 3){
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
                        apellido: null,
                        usuario:usuarioAGuardar.nombre,
                        email: usuarioAGuardar.email,
                        contrasenia:bcrypt.hashSync(usuarioAGuardar.contrasenia,10),
                        foto: `/image/users/${req.file.filename}`,
                        fecha_nacimiento: usuarioAGuardar.fechaDeNacimiento,
                        numero_documento: null
            
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
            errors.message= "El email ingresado no existe";
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
        let id = req.params.id;
        res.locals.id = id 
        usuario.findByPk(id)
        .then((result)=>{
            return res.render('editarPerfil', {usuario: result.dataValues, usuario_id: id})
        })
        .catch(error => console.log(error))//para pasar un parametro lo pasamos como objeto literal
    },
    logout: (req,res)=>{
        req.session.destroy();
        /* Destruir la cookie */
        res.clearCookie('usuarioId');

        res.locals.user = undefined;

        return res.render('login');
    },
    update: (req, res) =>{
        let id = req.params.id
        let datosUsuario = req.body

        let errors = {}
        console.log(datosUsuario);
        if(req.body.email.length == ""){
            errors.message = "el email esta vacio"
            res.locals.errors = errors
            return res.render('editarPerfil', {usuario_id: req.params.id})
        }else if(req.body.username == ""){
            errors.message = "el usuario esta vacio"
            res.locals.errors = errors
            return res.render('editarPerfil', {usuario_id: req.params.id})
        }else if(req.body.password == ""){
            errors.message = "la contraseña esta vacia"
            res.locals.errors = errors
            return res.render('editarPerfil', {usuario_id: req.params.id})
        }else if(req.body.foto == ""){
            errors.message = "debes subir una imagen"
            res.locals.errors = errors
            return res.render('editarPerfil', {usuario_id: req.params.id})
        }else if(req.body.fecha == ""){
            errors.message = "la fecha esta vacia"
            res.locals.errors = errors
            return res.render('editarPerfil', {usuario_id: req.params.id})
        }else if(req.body.dni.length == ""){
            errors.message = "el dni es invalido"
            res.locals.errors = errors
            return res.render('editarPerfil', {usuario_id: req.params.id})
        }else if(req.body.apellido == ""){
            errors.message = "el apellido esta vacio"
            res.locals.errors = errors
            return res.render('editarPerfil', {usuario_id: req.params.id})
        }else if(req.body.nombre == ""){
            errors.message = "el nombre esta vacio"
            res.locals.errors = errors
            return res.render('editarPerfil', {usuario_id: req.params.id})
        }
        else{
            let nuevosDatos = {
                email: req.body.email,
                contrasenia: bcrypt.hashSync(req.body.password,10),
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                numero_documento: req.body.dni,
                usuario: req.body.username,
                fecha_nacimiento: req.body.fecha,
                foto: req.file.filename
            }
            usuario.update( nuevosDatos,{where: {id: req.params.id}})
            .then((resultado) => {res.redirect(`/users/perfil/${req.params.id}`)})
        }

    }

}
module.exports = userController;