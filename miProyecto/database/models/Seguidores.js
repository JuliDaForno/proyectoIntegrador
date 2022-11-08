

module.exports= (sequelize, dataTypes) =>{
let alias = "seguidores"
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
    type:dataTypes.DATE
},
updatedAt: {
    type:dataTypes.DATE
},
}
let config={
    tableName: "seguidores",
    timestamps: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
}

let Seguidores = sequelize.define(alias, cols, config)

return Seguidores
}
