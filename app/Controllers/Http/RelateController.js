'use strict'

const Atema = use('App/Models/Atema')
const Database = use('Database')

class RelateController {
  async relate({ params, request, response }) {

    const { tableName } = request.body

    if (!tableName) {
      return response.send("Informe um campo da tabela!")
    }

    const languages = await Database
      .raw(`select a.${tableName} as name, count(*) as total from atemas a GROUP BY a.${tableName}`)

    return languages
  }
}

module.exports = RelateController
