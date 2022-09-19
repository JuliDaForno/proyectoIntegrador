const data = require('../data')
const homeController={
    index: function (req,res) {

        return res.render('index', {posteos: data.posteos})
    },
    search: function(req, res){
        return res.render('resultadoBusqueda')
    } 
}
module.exports = homeController  