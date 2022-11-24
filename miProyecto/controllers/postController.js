const { production } = require('../database/config/config')
const db = require('../database/models')
const { post } = require('../routes/users')
const posteo = db.posteo
const postController = {
    detallePosteo: function (req, res) {
        let id = req.params.id
        let relaciones = {
            include: [
                {
                    all: true,
                    nested: true,
                }
            ]
        }

        db.Posteo.findByPk(id, relaciones)
            .then((posteo) => {
                req.session.posteo_id = req.params.id
                return res.render('detallePost', { posteo: posteo })
            })
    },
    create: function (req, res) {
        res.render('agregarPost')
    },
    store: (req, res) => {
        if (!req.session.user) {
            return res.render('agregarPost', { error: 'No estas autorizado' })
        }
        req.body.id_usuarios = req.session.user.id

        if (req.file) req.body.image_name = (req.file.path).replace('public', '');
        db.Posteo.create({
            id_usuarios: req.session.user.id,
            image_name:req.body.image_name,
            pie_post: req.body.post
        })
            .then(function () {
                res.redirect('/')
            })
            .catch(function (error) {
                console.log(error);
            })
    },
    update: (req, res) => {
        let id = req.params.id;

        db.Posteo.findByPk(id)
            .then((result) => {
                return res.render('editarPost', {result, id})
            })
    },

    showOne: (req, res) => { },

    editarPost: (req, res) => {
        let primaryKey = req.params.id
        let id= primaryKey
        db.Posteo.findByPk(id)

        if (!req.session.user) {
            return res.render('editarPost', { error: 'No estas autorizado' })
        }
        req.body.id_usuarios = req.session.user.id

        if (req.file) req.body.image_name = (req.file.path).replace('public', '');
        db.Posteo.update({
            id_usuarios: req.session.user.id,
            image_name: req.body.imagen,
            pie_post: req.body.post} ,
            {where: { id: primaryKey}}
        )
            .then(function () {
                res.redirect('/')
            })
            .catch(function (error) {
                req.send(error);
            })
    },

    destroy: (req, res) => {
        let primaryKey = req.params.id;
        db.Posteo.findByPk(primaryKey)
            .then(post => {
                db.Comentario.destroy({
                    where: {
                        id_posteos: primaryKey
                    }
                })
                    .then(() => db.Posteo.destroy({
                        where: {
                            id: primaryKey
                        }
                    })
                        .then(() => res.redirect('/'))
                        .catch(err => console.log(err))
                    )
            })
    },
    comment: (req, res) => {
        db.Comentario.create({
            id_usuarios: req.session.user.id,
            id_posteos: req.session.posteo_id,
            texto_comentario: req.body.comentario
        }).then((result) => {
            res.redirect('/posts/detalle/' + req.session.posteo_id)
        })
    },

}
module.exports = postController;