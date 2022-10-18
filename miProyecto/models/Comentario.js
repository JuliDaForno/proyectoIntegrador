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
        created_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        updated_at: {
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
        underscored: true,
    }

    let Comentario = sequelize.define(alias,cols, config);
    return Comentario;
}
