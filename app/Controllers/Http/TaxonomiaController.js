'use strict'

const Taxonomia = use('App/Models/Taxonomia')

class TaxonomiaController {

  async index({ request, response, view }) {
    const taxonomia = await Taxonomia.all();

    return taxonomia
  }
  async store({ request, response }) {
    const data = request.all()
    const taxonomia = await Taxonomia.create(data)
    return taxonomia;
  }
  async destroy({ params, request, response }) {
    const taxonomia = await Taxonomia.findOrFail(params.id)

    await taxonomia.delete()
  }
}

module.exports = TaxonomiaController
