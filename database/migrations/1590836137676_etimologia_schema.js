'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EtimologiaSchema extends Schema {
  up() {
    this.create('etimologias', (table) => {
      table.increments()
      table.string('name')
      table.timestamps()
    })
  }

  down() {
    this.drop('etimologias')
  }
}

module.exports = EtimologiaSchema
