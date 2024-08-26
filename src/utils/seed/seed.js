const Anime = require('../../api/models/anime')
const anime = require('../../data/animes')
const mongoose = require('mongoose')

mongoose
  .connect(
    'mongodb+srv://davitarm123:QGmYN2tB4WmIDObI@cluster0.pqwzy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0QGmYN2tB4WmIDObI'
  )
  .then(async () => {
    // Buscamos todas las películas de nuestra colección
    const allAnime = await Anime.find()
    // Si existen películas previamente, dropearemos la colección
    if (allAnime.length) {
      await Anime.collection.drop() //La función drop borra la colección
    }
  })
  .catch((err) => console.log(`error fatal: ${err}`))
  .then(async () => {
    await Anime.insertMany(anime)
  })
  .catch((err) => console.log(`Error creating data: ${err}`))

  .finally(() => mongoose.disconnect())
