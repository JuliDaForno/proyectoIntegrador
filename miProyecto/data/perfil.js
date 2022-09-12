const perfil = 
{
    usuarios:[
        {
            nombre: 'zendaya',
            seguidores: '151 mill.',
            publicaciones: '3.541',
            seguidos: '1.755',
            posteo:'images/Zendaya.jpg',
            id:3,

        },
        {
            nombre: 'noahschnapp',
            seguidores: '27,5 mill.',
            publicaciones: '190',
            seguidos: '2.635',
            id:5,

        },
        
    ],
    posteos:[

    ],
    detalleUsuario: function(id){
        //console.log(id);
        let resultado = {};
        for (let i=0; i<perfil.usuarios.length; i++) {
            //console.log(perfil.usuarios[i]);
            if (id==perfil.usuarios[i].id) {
                //console.log('dentro del if');
                resultado=perfil.usuarios[i]   
            }     
        }
        return resultado
    },
    
    
}
module.exports = perfil;

