const { Article } = require('./models')

Article.destroy({
 where: {
  id: 6
 }
}).then(() => console.log('Berhasil delete'))