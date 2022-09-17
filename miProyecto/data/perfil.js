const perfil = 
{
    usuarios:[
        {
            id: 3,
            nombre: 'zendaya',
            seguidores: '151 mill.',
            publicaciones: '3.541',
            seguidos: '1.755',
            fotoPerfil:'/images/fotoPerfilZendaya.jpg',
            mail: 'zendaya@gmail.com',
            contrasenia: 'zendaya100',
            fecha: '01-09-1996',
            dni: '57.818.155'
        },
        {
            id: 5,
            nombre: 'noahschnapp',
            seguidores: '27,5 mill.',
            publicaciones: '190',
            seguidos: '2.635',
            fotoPerfil:'/images/posteo2Noah.jpeg',
            mail: 'zendaya@gmail.com',
            contrasenia: 'zendaya100',
            fecha: '01-09-1996',
            dni: '57.818.155'
        },
        {
            id: 4,
            nombre: 'Lady Gaga',
            seguidores: '27,5 mill.',
            publicaciones: '190',
            seguidos: '2.635',
            fotoPerfil:'/images/ladygagaFotoperfil.jpg',
            mail: 'zendaya@gmail.com',
            contrasenia: 'zendaya100',
            fecha: '01-09-1996',
            dni: '57.818.155'
        },
        {
            id: 1,
            nombre: 'Miley Cyrus',
            seguidores: '27,5 mill.',
            publicaciones: '190',
            seguidos: '2.635',
            fotoPerfil:'/images/mileyfotoPerfil.jpg',
            mail: 'zendaya@gmail.com',
            contrasenia: 'zendaya100',
            fecha: '01-09-1996',
            dni: '57.818.155'

        },
        {
            id: 2,
            nombre: 'Adele Blue',
            seguidores: '27,5 mill.',
            publicaciones: '190',
            seguidos: '2.635',
            fotoPerfil:'/images/adeleFotoPerfil.jpg',
            mail: 'zendaya@gmail.com',
            contrasenia: 'zendaya100',
            fecha: '01-09-1996',
            dni: '57.818.155'
        },
        
    ],


    posteos:[
        {
            id: 8,
            id_usuario: 3,
            nombre: 'zendaya',
            posteo:'/images/posteoZendaya.jpg', 
            fotoPerfil:'/images/fotoPerfilZendaya.jpg',
            comentarios: [
                {
                    id_usuario: 4,
                    nombre: 'Lady Gaga',
                    comentario: 'Hermosa foto',
                    fotoPerfil:'/images/ladygagaFotoperfil.jpg'
                }, 
                {
                    id_usuario: 5,
                    nombre: 'noah schnapp',
                    comentario: 'Muy linda publicacion',
                    fotoPerfil:'/images/posteo2Noah.jpeg'

                }
            ]
            
        },  
        {
            id: 11,
            id_usuario: 3,
            nombre: 'zendaya',   
            posteo:'/images/posteo2Zendaya.jpg',
            fotoPerfil:'/images/fotoPerfilZendaya.jpg',
            comentarios: [
                {
                    id_usuario: 4,
                    nombre: 'Lady Gaga',
                    comentario: 'Hermosa foto',
                    fotoPerfil:'/images/ladygagaFotoperfil.jpg'
                }, 
                {
                    id_usuario: 1,
                    nombre: 'Miley cyrus',
                    comentario: 'Me gusta tu foto',
                    fotoPerfil:'/images/mileyfotoPerfil.jpg'
                }
            ]  
        },
        {
            id: 10,
            id_usuario: 5,
            nombre: 'noah Schnapp',
            posteo:'/images/posteo1Noah.jpg',
            fotoPerfil:'/images/posteo2Noah.jpeg',
            comentarios: [
                {
                    id_usuario: 4,
                    nombre: 'Lady Gaga',
                    comentario: 'Hermosa foto',
                    fotoPerfil:'/images/ladygagaFotoperfil.jpg'
                }, 
                {
                    id_usuario: 1,
                    nombre: 'Miley cyrus',
                    comentario: 'Me gusta tu foto',
                    fotoPerfil:'/images/mileyfotoPerfil.jpg'
                }
            ]
        },
  
        {   
            id: 9,
            id_usuario: 5,
            nombre: 'noah Schnapp',
            posteo:'/images/poseteNoah.jpg',
            fotoPerfil:'/images/posteo2Noah.jpeg',
            comentarios: [
                {
                    id_usuario: 4,
                    nombre: 'Lady Gaga',
                    comentario: 'Hermosa foto',
                    fotoPerfil:'/images/ladygagaFotoperfil.jpg'
                }, 
                {
                    id_usuario: 1,
                    nombre: 'Miley cyrus',
                    comentario: 'Me gusta tu foto',
                    fotoPerfil:'/images/mileyfotoPerfil.jpg'

                }
            ]
        },
        {
            id: 1,
            id_usuario: 4,
            nombre: 'Lady Gaga',
            posteo:'/images/ladygagaposteo1.jpeg',
            fotoPerfil:'/images/ladygagaFotoperfil.jpg',
            comentarios: [
                {
                    id_usuario: 3,
                    nombre: 'zendaya',
                    comentario: 'Hermosa foto',
                    fotoPerfil:'/images/fotoPerfilZendaya.jpg',

                }, 
                {
                    id_usuario: 1,
                    nombre: 'Miley cyrus',
                    comentario: 'Me gusta tu foto',
                    fotoPerfil:'/images/mileyfotoPerfil.jpg'
                }
            ]
        },
        {
            id: 3,
            id_usuario: 4,
            nombre: 'Lady Gaga',
            posteo:'/images/ladygagaposteo2.jpg',
            fotoPerfil:'/images/ladygagaFotoperfil.jpg',  
            comentarios: [
                {
                    id_usuario: 3,
                    nombre: 'zendaya',
                    comentario: 'Hermosa foto',
                    fotoPerfil:'/images/fotoPerfilZendaya.jpg',
                }, 
                {
                    id_usuario: 1,
                    nombre: 'Miley cyrus',
                    comentario: 'Me gusta tu foto',
                    fotoPerfil:'/images/mileyfotoPerfil.jpg'

                }
            ] 
        },
        {
            id: 4,
            id_usuario:1,
            nombre: 'Miley Cyrus',
            posteo:'/images/mileyposteo1.jpg',
            fotoPerfil:'/images/mileyfotoPerfil.jpg', 
            comentarios: [
                {
                    id_usuario: 3,
                    nombre: 'zendaya',
                    comentario: 'Hermosa foto',
                    fotoPerfil:'/images/fotoPerfilZendaya.jpg',
                }, 
                {
                    id_usuario: 5,
                    nombre: 'noah schnapp',
                    comentario: 'Me gusta tu foto',
                    fotoPerfil:'/images/posteo2Noah.jpeg',

                }
            ]
        },
        {
            id: 7,
            id_usuario:1,
            nombre: 'Miley Cyrus',
            posteo:'/images/mileyposteo2.jpg',
            fotoPerfil:'/images/mileyfotoPerfil.jpg', 
            comentarios: [
                {
                    id_usuario: 3,
                    nombre: 'zendaya',
                    comentario: 'Hermosa foto',
                    fotoPerfil:'/images/fotoPerfilZendaya.jpg'
                }, 
                {
                    id_usuario: 5,
                    nombre: 'noah schnapp',
                    comentario: 'Me gusta tu foto',
                    fotoPerfil:'/images/posteo2Noah.jpeg'

                }
            ]
        },
        { 
            id: 5,
            id_usuario: 2,
            nombre: 'Adele Blue',
            posteo:'/images/adeleposteo1.jpg',
            fotoPerfil:'/images/adeleFotoPerfil.jpg', 
            comentarios: [
                {
                    id_usuario: 3,
                    nombre: 'zendaya',
                    comentario: 'Hermosa foto',
                    fotoPerfil:'/images/fotoPerfilZendaya.jpg'
                    
                }, 
                {
                    id_usuario: 5,
                    nombre: 'noah schnapp',
                    comentario: 'Me gusta tu foto',
                    fotoPerfil:'/images/posteo2Noah.jpeg'
                }
            ]
               
        },
        {   
            id_usuario: 2,
            nombre: 'Adele Blue',
            id: 6,
            posteo:'/images/adeleposteo2.jpg',
            fotoPerfil:'/images/adeleFotoPerfil.jpg', 
            comentarios: [
                {
                    id_usuario: 3,
                    nombre: 'zendaya',
                    comentario: 'Hermosa foto',
                    fotoPerfil:'/images/fotoPerfilZendaya.jpg'
                }, 
                {
                    id_usuario: 5,
                    nombre: 'noah schnapp',
                    comentario: 'Me gusta tu foto',
                    fotoPerfil:'/images/posteo2Noah.jpeg'
                }
            ]
        }
        
    ],

    comentario: [{
        id_usuario: 1,
        id_posteo: 2,
        comentario: 'Que linda foto',
        fotoPerfil:'/images/mileyfotoPerfil.jpg'
    },
    {
        id_usuario: 2,
        id_posteo: 2,
        comentario: 'Me gusta tu foto',
        fotoPerfil:'/images/adeleFotoPerfil.jpg'
    },
    {
        id_usuario: 3,
        id_posteo: 1,
        comentario: 'Que hermosa',
        fotoPerfil:'/images/fotoPerfilZendaya.jpg'
    },
    {
        id_usuario: 4,
        id_posteo: 2,
        comentario: 'Que linda foto',
        fotoPerfil:'/images/ladygagaFotoperfil.jpg'
    },
    {
        id_usuario: 5,
        id_posteo: 2,
        comentario: 'Me gusta tu foto',
        fotoPerfil:'/images/posteo2Noah.jpeg'
    },
    {
        id_usuario: 1,
        id_posteo: 2,
        comentario: 'Que linda foto',
        fotoPerfil:'/images/mileyfotoPerfil.jpg'
    },
    {
        id_usuario: 2,
        id_posteo: 1,
        comentario: 'Que linda foto',
        fotoPerfil:'/images/adeleFotoPerfil.jpg'
    },
    {
        id_usuario: 3,
        id_posteo: 2,
        comentario: 'Que linda foto',
        fotoPerfil:'/images/fotoPerfilZendaya.jpg'
    }

    ],
    
    detalleUsuario: function(id){
        let resultado = {};
        for (let i=0; i<perfil.usuarios.length; i++) {
            if (id==perfil.usuarios[i].id ) {
                    resultado=perfil.usuarios[i]
                
            }     
        }
        return resultado

    },
    detallePosteo: function(id){
        let resultado ={};
        for (let i = 0; i < perfil.posteos.length; i++) {
            if(id==perfil.posteos[i].id){
                resultado=perfil.posteos[i]
            }
             
        }
        return resultado
    },
    posteosDeCadaUsuario: function(id){
        let resultado = [];
        for(let i = 0; i < perfil.posteos.length; i++) {
            if(id==perfil.posteos[i].id_usuario){
                resultado.push(perfil.posteos[i])
            }
            
        }
        return resultado
    },
    misPosteos: function (id) {
      let misPosteos= [];
      for (let i = 0; i< perfil.posteos.length; i++) {
        if(id==perfil.posteos[i].id_usuario){
            misPosteos.push(perfil.posteos[i])
        }
       
      } 
      return misPosteos
    }
        
    }
    

module.exports = perfil;

