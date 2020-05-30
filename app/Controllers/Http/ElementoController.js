'use strict'

const Elemento = use('App/Models/Elemento')


class ElementoController {
  async index({ request, response, view }) {
    const elemento = await Elemento.all();

    return elemento
  }
  async store({ request, response }) {
    const data = request.all()
    const elemento = await Elemento.create(data)
    return elemento;
  }
  async destroy({ params, request, response }) {
    const elemento = await Elemento.findOrFail(params.id)

    await elemento.delete()
  }
}

module.exports = ElementoController
