const perfil = 
{
    usuarios:[
        {
            id:3,
            nombre: 'zendaya',
            seguidores: '151 mill.',
            publicaciones: '3.541',
            seguidos: '1.755',
            fotoPerfil:'images/poste2Noah.jpeg', 
           

        },
        {
            nombre: 'noahschnapp',
            seguidores: '27,5 mill.',
            publicaciones: '190',
            seguidos: '2.635',
            fotoPerfil:'images/fotoPerfilZendaya.jpg', 
            fotoPerfil:'images/posteo2Noah.jpeg', 
            id:5,

        },
        {
            nombre: 'Lady Gaga',
            seguidores: '27,5 mill.',
            publicaciones: '190',
            seguidos: '2.635',
            fotoPerfil:'images/ladygagaFotoperfil.jpg', 
            id:4,

        },
        {
            nombre: 'Miley Cyrus',
            seguidores: '27,5 mill.',
            publicaciones: '190',
            seguidos: '2.635',
            fotoPerfil:'images/mileyfotoPerfil.jpg', 
            id:1,

        },
        {
            nombre: 'Adele Blue',
            seguidores: '27,5 mill.',
            publicaciones: '190',
            seguidos: '2.635',
            fotoPerfil:'images/adeleFotoPerfil.jpg', 
            id:2,

        },
        
    ],
    posteos:[
        {
        id_Usuario: 3,
        nombre: 'zendaya',
        posteo:'images/posteoZendaya.jpg',
        posteo2:'images/posteo2Zendaya.jpg'},
        {
            id_Usuario: 5,
            nombre: 'noah',
            posteo:'images/posteo1Noah.jpeg',
            posteo2:'images/poseteNoah.jpg'},
            {
                id_Usuario: 4,
                nombre: 'Lady Gaga',
                posteo:'images/ladygagaposteo1.jpeg',
            posteo2:'images/ladygagaposteo2.jpg'},
            {
                id_Usuario:1,
                nombre: 'Miley Cyrus',
                posteo:'images/mileyposteo1.jpg',
                posteo2:'images/mileyposteo2.jpg'},

  { 
    id_Usuario: 2,
                nombre: 'Adele Blue',
                posteo:'images/adeleposteo1.jpg',
                posteo2:'images/adeleposteo2.jpg',
               }
        
    ],
    comentario: [

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
    detallePosteo: function(id_usuario){
        let resultado = {};
        for (let i = 0; i < perfil.posteos.length; i++) {
            if(id_usuario ==perfil.posteos[i].id_Usuario){
                resultado = perfil.posteos[i]
            }
             
        }
        return resultado
    },
    

        
    }
    

module.exports = perfil;

