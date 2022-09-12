const perfil = 
{
    usuarios:[
        {
            nombre: 'zendaya',
            seguidores: '151 mill.',
            publicaciones: '3.541',
            seguidos: '1.755',
            id:3

        },
        {
            nombre: 'noahschnapp',
            seguidores: '27,5 mill.',
            publicaciones: '190',
            seguidos: '2.635',
            id:5

        },
        
    ],
    posteos:[

    ],
    detalleUsuario: function(usuario){
        let resultado = [];
        for (let i = 0; i<perfil.usuarios.length; i++) {
            if (usuario == perfil.usuarios[i].nombre) {
                resultado.push(perfil.usuarios[i])   
            }
            
        }
        return resultado
    }
    
}
module.exports = perfil;
