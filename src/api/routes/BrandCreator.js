const {
  getCreadores,
  getCreadorId,
  postCreador,
  putCreador,
  deleteCreador
} = require('../crontollers/BrandCreator')

const creadoresRouter = require('express').Router()

creadoresRouter.get('/:id', getCreadorId)
creadoresRouter.get('/', getCreadores)
creadoresRouter.post('/', postCreador)
creadoresRouter.put('/:id', putCreador)
creadoresRouter.delete('/:id', deleteCreador)

module.exports = creadoresRouter
