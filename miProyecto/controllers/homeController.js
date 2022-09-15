const data = require('../data/perfil')
const homeController={
    index: function (req,res) {

        return res.render ('index', {posteos: data.posteos})
    }
 
}
module.exports = homeController