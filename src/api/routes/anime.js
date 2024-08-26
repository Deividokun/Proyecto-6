const {
  getAnimes,
  getAnimeId,
  getAnimeByStyle,
  getAnimeByPrice,
  postAnime,
  putAnime,
  deleteAnime
} = require('../crontollers/anime')

const animesRouter = require('express').Router()

animesRouter.get('/precio/:precio', getAnimeByPrice)
animesRouter.get('/categoria/:categoria', getAnimeByStyle)
animesRouter.get('/:id', getAnimeId)
animesRouter.get('/', getAnimes)
animesRouter.post('/', postAnime)
animesRouter.put('/:id', putAnime)
animesRouter.delete('/:id', deleteAnime)

module.exports = animesRouter
