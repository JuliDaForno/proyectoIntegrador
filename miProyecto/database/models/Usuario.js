//Paso 1: exportar
module.exports = function (sequelize, dataTypes) {

    //Paso 2: crear variables dentro de la función
    let alias = 'Usuario';

    //Paso 3: Crear una variable con la estructura de la tabla
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
            type: dataTypes.STRING,
            allowNull: true
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
        }
    }

    //Paso 4: crear un objeto literal con la configuración de la tabla
    let config = {
        tableName: "usuario",
        timestamps: false,
        underscored: false,
    }

    //Paso 5: Crear el método definido con los tres parámetros.
    let Usuario = sequelize.define(alias, cols, config);
    Usuario.associate = function (models) {
        Usuario.hasMany(models.Posteo, {
            as: 'posteo',
            foreignKey: 'id_usuarios',
        })
        Usuario.hasMany(models.Comentario, {
            as: 'comentario',
            foreignKey: 'id_usuarios',
            timestamps: false,
        })
        Usuario.belongsToMany(models.Usuario, {
            as: 'mis_seguidores',
            through: 'seguidores',
            foreignKey: 'id_seguidor',
            otherKey: 'id_seguido',

        })
        Usuario.belongsToMany(models.Usuario, {
            as: 'seguidos',
            through: 'seguidores',
            foreignKey: 'id_seguido',
            otherKey: 'id_seguidor',

        })

    }

    //Paso 6: Retornar el valor del modelo
    return Usuario;

}