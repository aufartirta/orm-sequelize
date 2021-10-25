const { Article } = require('./models')

// Article.findAll().then(data => {
//  console.log(data)
// })

Article.findOne({
 where: {
  id: 1
 }
}).then(data => console.log(data))