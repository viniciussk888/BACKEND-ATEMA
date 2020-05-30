'use strict'

const Etimologia = use('App/Models/Etimologia')


class EtimologiaController {

  async index({ request, response, view }) {
    const etimologia = await Etimologia.all();

    return etimologia
  }
  async store({ request, response }) {
    const data = request.all()
    const etimologia = await Etimologia.create(data)
    return etimologia;
  }
  async destroy({ params, request, response }) {
    const etimologia = await Etimologia.findOrFail(params.id)

    await etimologia.delete()
  }

}

module.exports = EtimologiaController
