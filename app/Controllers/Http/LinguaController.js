'use strict'

const Lingua = use('App/Models/Lingua')


class LinguaController {

  async index({ request, response, view }) {
    const lingua = await Lingua.all();

    return lingua
  }
  async store({ request, response }) {
    const data = request.all()
    const lingua = await Lingua.create(data)
    return lingua;
  }
  async destroy({ params, request, response }) {
    const lingua = await Lingua.findOrFail(params.id)

    await lingua.delete()
  }
}

module.exports = LinguaController
