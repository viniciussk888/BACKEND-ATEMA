'use strict'

const Atema = use('App/Models/Atema')

class AtemaController {
  async index({ }) {
    const atemas = await Atema.all();

    return atemas
  }
  async store({ request }) {
    const data = request.all()
    const atema = await Atema.create(data)
    return atema;
  }
  async show({ params }) {
    const atema = await Atema.findOrFail(params.id)
    return atema
  }
  async update({ params, request }) {
    const atema = await Atema.findOrFail(params.id)
    const data = request.all()

    atema.merge(data)

    await atema.save()

    return atema
  }
  async filter({ params, request, response }) {
    const { mesorregiao, microrregiao, municipio } = request.body
    if (municipio) {
      const atema = await Atema.findByOrFail('municipio', municipio)
      return atema
    }
    if (microrregiao) {
      const atema = await Atema.findByOrFail('microrregiao', microrregiao)
      return atema
    }
    const atema = await Atema.findByOrFail('mesorregiao', mesorregiao)
    return atema
  }
  async destroy({ params }) {
    const atema = await Atema.findOrFail(params.id)

    await atema.delete()
  }
}

module.exports = AtemaController
