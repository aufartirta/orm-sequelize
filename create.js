const { Article } = require('./models')

Article.create({
 title: 'Hello World!',
 body: 'Lorem Ipsum',
 approved: true
}).then(article => {
 console.log(article, 'berhasil buat article baru!')
})