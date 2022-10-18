module.exports = function (sequelize, dataTypes) {
    let alias = 'posteo';

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        id_usuarios: {
            type: dataTypes.INTEGER
        },
       image_name:{
        type: dataTypes.STRING
       },
       pie_post:{
        type: dataTypes.STRING
       },
    
        created_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: true,
        }, 
         delete_at: {
            type: dataTypes.DATE,
            allowNull: true,
        }
    }

    let config ={
        tableName: "posteo",
        timestamps: false,
        underscored: true,
    }

    let Posteo = sequelize.define(alias,cols, config);
    
    Posteo.associate = function(models) {
        Posteo.hasMany( models.Comentario, {
            as : 'comentario',
            foreingKey : 'id_posteos'
        }),
        Posteo.belongsTo(models.Usuario, {
        as: 'usuario',
        foreingKey: 'id_usuarios'
        })
    }
    return Posteo ;
}