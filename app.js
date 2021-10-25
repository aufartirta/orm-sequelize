const express = require('express')
const app = express()
const port = 5000

const { Article } = require('./models')

app.use(express.json())

app.get('/articles', (req, res) => {
 Article.findAll()
 .then(articles => {
  res.status(200).json(articles)
 })
})

app.get('/articles/:id', (req, res) => {
 Article.findOne({
  where: { id: req.params.id }
 })
 .then(article => {
  res.status(200).json(article)
 })
})

// Create Article
app.post('/articles', (req, res) => {
 Article.create({
  title: req.body.title,
  body: req.body.body,
  approved: req.body.approved
})
.then(article => {
 res.status(201).json(article)
}).catch(err => {
 res.status(422).json("Can't create article")
})
})

// Update Article by id
app.put('/articles/:id', (req, res) => {
 Article.update({
  title: req.body.title,
  body: req.body.body,
  approved: req.body.approved
}, {
 where: { id: req.params.id }
})
.then(article => {
 res.status(201).json(article)
}).catch(err => {
 res.status(422).json("Can't update article")
})
})

// Delete Article by id
app.delete('/articles/:id', (req, res) => {
 Article.destroy({
 where: { id: req.params.id }
})
.then(article => {
 res.status(201).json(article)
}).catch(err => {
 res.status(422).json("Can't delete article")
})
})

app.listen(port, () => {
 console.log(`Example app listening at http://localhost:${port}`)
})