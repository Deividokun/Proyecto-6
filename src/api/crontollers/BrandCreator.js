const creador = require('../models/BrandCreator')
console.log(creador)

const getCreadores = async (req, res, next) => {
  try {
    const creadores = await creador.find()
    return res.status(200).json(creadores)
  } catch (error) {
    return res.status(400).json('Error xx')
  }
}

const getCreadorId = async (req, res, next) => {
  try {
    const { id } = req.params
    const creadorFound = await creador.findById(id)
    return res.status(200).json(creadorFound)
  } catch (error) {
    return res.status(400).json('Error total')
  }
}

const postCreador = async (req, res, next) => {
  try {
    const newCreador = new creador(req.body)
    const creadorSaved = await newCreador.save()
    return res.status(201).json(creadorSaved)
  } catch (error) {
    return res.status(400).json('error total y garrafal')
  }
}

const putCreador = async (req, res, next) => {
  try {
    const { id } = req.params
    const viejaCreador = await creador.findById(id)
    const newCreador = new creador(req.body)
    newCreador._id = id
    newCreador.anime = [...viejaCreador.anime, ...req.body.anime] /// lo que hecho aqui es unir o "fusionar los datos de mi antiguo id con los nuevos para poder añadir a los creadores como bandai, funimation mas de un anime dentro de un array juegos creado anteriormente en el modelo"
    const creadorUpdated = await creador.findByIdAndUpdate(id, newCreador, {
      new: true
    })
    return res.status(200).json(creadorUpdated)
  } catch (error) {
    return res.status(400).json('Error unico')
  }
}

const deleteCreador = async (req, res, next) => {
  try {
    const { id } = req.params
    const creadorDeleted = await creador.findByIdAndDelete(id)
    return res.status(200).json(creadorDeleted)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

module.exports = {
  getCreadores,
  getCreadorId,
  postCreador,
  putCreador,
  deleteCreador
}
