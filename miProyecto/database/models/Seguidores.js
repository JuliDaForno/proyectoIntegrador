
module.exports= (sequelize, dataTypes) =>{
    let alias = "Seguidores"
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        id_seguido: {
            type: dataTypes.INTEGER
        },
        id_seguidor: {
        type:dataTypes.INTEGER
    },
    createdAt: {
        type:dataTypes.DATE,
        allowNull: true,
    },
    updatedAt: {
        type:dataTypes.DATE,
        allowNull: true,
    },
    }
    let config={
        tableName: "seguidores",
        timestamps: false,
        underscored: false,
    }
    
    let Seguidores = sequelize.define(alias, cols, config)
 
    return Seguidores

    }