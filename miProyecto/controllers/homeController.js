const homeController={
    index: function (req,res) {
        const posteos= [
            {
                id: 8,
                id_Usuario: 3,
                nombre: 'zendaya',
                imagen:'images/posteoZendaya.jpg'
            },  
            {
                id: 11,
                id_Usuario: 3,   
                posteo2:'images/posteo2Zendaya.jpg',
            },
            {
                id: 10,
                id_Usuario: 5,
                nombre: 'noah',
                imagen:'images/posteo1Noah.jpg'
            },
            {   
                id: 9,
                id_Usuario: 5,
                posteo2:'images/poseteNoah.jpg'
            },
            {
                id: 1,  
                id_Usuario: 4,
                nombre: 'Lady Gaga',
                imagen:'images/ladygagaposteo1.jpeg',
            },
            {
                id: 3,
                id_Usuario: 4,
                posteo2:'images/ladygagaposteo2.jpg'   
            },
            {
                id: 4,
                id_Usuario:1,
                nombre: 'Miley Cyrus',
                imagen:'images/mileyposteo1.jpg',
            },
            {
                id: 7,
                id_Usuario:1,
                posteo2:'images/mileyposteo2.jpg'
            },
            { 
                id: 5,
                id_Usuario: 2,
                nombre: 'Adele Blue',
                imagen:'images/adeleposteo1.jpg',
            },
            {
                id_Usuario: 2,
                id: 6,
                posteo2:'images/adeleposteo2.jpg',
            }
        ]

        return res.render ('index', {posteos: posteos})
    }
 
}
module.exports = homeController