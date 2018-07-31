const mongoose = require('mongoose')
const Article = require('mongoose').model('Article')
const Edits = require('mongoose').model('Edits')

module.exports = {
    index: (req, res) => {
        Article.find()
            .sort({ creationDate: -1 })
            .then(articles => {
                let newestArticles = articles.slice(0, 3)
                let newestArticleId = newestArticles[0]._id

                Edits.find({ articleId: newestArticleId })
                    .sort({ creationDate: -1 })
                    .then(edits => {
                        let newestEdit = edits[0]
                        let article = {}
                        article.id = newestArticleId
                        article.title = newestEdit.articleTitle
                        article.shortContent = newestEdit.shortContent

                        res.render('home/index', {
                            article: article,
                            newestArticles: newestArticles
                        })
                    })
            })
            .catch(err => {
                res.render('error/error', {
                    error: err
                })
            })
    },
    getCreate: (req, res) => {
        res.render('articles/create')
    },
    postCreate: (req, res) => {
        const articleParams = req.body

        Article.create({
            title: articleParams.title
        }).then(article => {
            let articleId = article._id

            Edits.create({
                articleId: articleId,
                articleTitle: articleParams.title,
                content: articleParams.content,
                author: req.user.username
            }).then(edits => {
                res.redirect('/')
            })
        }).catch(err => {
                res.render('error/error', {
                    error: err
                })
            })
    },
    articleDetails: (req, res) => {
        let articleId = req.params.id

        Edits.find({ articleId: req.params.id })
            .sort({ creationDate: -1 })
            .then(edits => {
                let edit = edits[0]
                edit.content = edit.content
                    .split(/\r\n\r\n/)
                    .map(x => '<p>' + x.trim() + '</p>')
                    .join('')

                res.render('articles/article', {
                    edit: edit
                })
            })
            .catch(err => {
                res.render('error/error', {
                    error: err
                })
            })
    },
    allArticles: (req, res) => {
        Article.find()
            .sort({ title: 1 })
            .then(articles => {
                res.render('articles/all', {
                    articles: articles
                })
            })
            .catch(err => {
                res.render('error/error', {
                    error: err
                })
            })
    },
    getEdit: (req, res) => {

        Article.findById(req.params.id)
            .then(article => {
                if (article.locked) {
                    let error = { message: 'Article is locked' }
                    res.render('home/index', { error: error })
                }

                Edits.find({ articleId: req.params.id })
                    .sort({ creationDate: -1 })
                    .then(edits => {
                        let edit = edits[0]

                        res.render('articles/edit', {
                            edit: edit
                        })
                    })
            })
            .catch(err => {
                res.render('error/error', {
                    error: err
                })
            })
    },
    postEdit: (req, res) => {
        let articleParams = req.body
        let articleId = articleParams.articleId

        Article.findById(articleId)
            .then(article => {
                if (article.locked) {
                    let error = { message: 'Article is locked' }
                    res.render('home/index', { error: error })
                }

                Edits.create({
                    articleId: articleId,
                    articleTitle: article.title,
                    content: articleParams.content,
                    author: req.user.username
                }).then(edits => {
                    res.redirect(`/articles/details/${articleId}`)
                })
            })
            .catch(err => {
                res.render('error/error', {
                    error: err
                })
            })
    },
    articleHistory: (req, res) => {
        let articleId = req.params.id

        Edits.find({ articleId: req.params.id })
            .sort({ creationDate: -1 })
            .then(edits => {
                res.render('articles/history', {
                    edits: edits
                })
            })
            .catch(err => {
                res.render('error/error', {
                    error: err
                })
            })
    },
    previousEdit: (req, res) => {
        let editId = req.params.id

        Edits.findById(editId)
            .then(edit => {
                res.render('articles/edit', {
                    edit: edit
                })
            })
            .catch(err => {
                res.render('error/error', {
                    error: err
                })
            })
    },
    latest: (req, res) => {
        Article.find()
            .sort({ creationDate: -1 })
            .then(articles => {
                let newestArticleId = articles[0]._id

                res.redirect(`/articles/details/${newestArticleId}`)
                return
            })
            .catch(err => {
                res.render('error/error', {
                    error: err
                })
            })
    },
    lock: (req, res) => {
        let atricleId = req.params.id
        Article.findByIdAndUpdate(atricleId, { locked: true })
            .then(article => {
                res.redirect(`/articles/details/${atricleId}`)
            })
            .catch(err => {
                res.render('error/error', {
                    error: err
                })
            })
    },
    unlock: (req, res) => {
        let atricleId = req.params.id
        Article.findByIdAndUpdate(atricleId, { locked: false })
            .then(article => {
                res.redirect(`/articles/details/${atricleId}`)
            })
            .catch(err => {
                res.render('error/error', {
                    error: err
                })
            })
    }
}
