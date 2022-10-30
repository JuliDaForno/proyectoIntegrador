module.exports = function (sequelize, dataTypes) {
    let alias = 'Comentario';

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        id_usuarios: {
            type: dataTypes.INTEGER
        },
        id_posteos: {
            type: dataTypes.INTEGER

        },
        texto_comentario: {
            type: dataTypes.STRING,
        },
        createdAt: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        updatedAt: {
            type: dataTypes.DATE,
            allowNull: true,
        },  delete_at: {
            type: dataTypes.DATE,
            allowNull: true,
        }
    }

    let config ={
        tableName: "comentario",
        timestamps: false,
        underscored: false,
    }

    let Comentario = sequelize.define(alias,cols, config);
    Comentario.associate = function(models) {
       Comentario.belongsTo(models.Posteo, {
             as : 'posteo',
             foreignKey : 'id_posteos',
             onDelete:'cascade'
         }),
         Comentario.belongsTo(models.Usuario, {
             as : 'usuario',
             foreignKey : 'id_usuarios',
             timestamps:false,
             onDelete:'cascade'
         })
        }
    return Comentario;
}
