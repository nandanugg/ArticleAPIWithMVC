const { Articles } = require('../models')

module.exports = {
  async get(req, res) {
    const articles = await Articles.findAll({})
    res.render('index', { articles })
  },
  async add(req, res) {
    const { body } = req
    console.log(body);
    await Articles.create(body)
    res.redirect('/')
  },
  async delete(req, res) {
    const { id } = req.query
    await Articles.destroy({
      where: { id }
    })
    res.redirect('/')
  },
  async edit(req, res) {
    const { id } = req.query
    const { body } = req
    await Articles.update(
      body,
      { where: { id } }
    )
    res.redirect('/')
  },
}