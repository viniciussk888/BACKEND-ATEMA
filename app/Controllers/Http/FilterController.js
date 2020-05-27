'use strict'

const Atema = use('App/Models/Atema')

class FilterController {
  async filter({ params, request, response }) {
    const { mesorregiao, microrregiao, municipio } = request.body
    if (municipio) {
      const atema = await Atema
        .query()
        .where('municipio', '=', municipio)
        .fetch()
      return atema
    } else if (microrregiao) {
      const atema = await Atema
        .query()
        .where('microrregiao', '=', microrregiao)
        .fetch()

      return atema
    } else {
      const atema = await Atema
        .query()
        .where('mesorregiao', '=', mesorregiao)
        .fetch()

      return atema
    }
  }
}

module.exports = FilterController
