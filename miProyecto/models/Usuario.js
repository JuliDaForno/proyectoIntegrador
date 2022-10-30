module.exports = function (sequelize, dataTypes) {
    let alias = 'Usuario';

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING
        },
        apellido: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        usuario: {
            type: dataTypes.STRING
        },
        contrasenia: {
            type: dataTypes.STRING
        },
        fecha_nacimiento: {
            type: dataTypes.DATE
        },
        numero_documento: {
            type: dataTypes.INTEGER
        },
        foto: {
            type: dataTypes.STRING
        },
        createdAT: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        updatedAt: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        deletedAt: {
            type: dataTypes.DATE,
            allowNull: true,
        }
    }

    let config = {
        tableName: "usuario",
        timestamps: false,
        underscored: false,
    }

    let Usuario = sequelize.define(alias, cols, config);
    Usuario.associate = function(models) {
       Usuario.belongsTo(models.Posteo, {
            as : 'posteo',
            foreignKey : 'id_usuarios',
            onDelete:'cascade'
        }),
        Usuario.hasMany(models.Comentario, {
            as : 'comentario',
            foreignKey : 'id_usuarios',
            timestamps:false,
            onDelete: 'cascade'
        })
    }
    return Usuario;

}