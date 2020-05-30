'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LinguaSchema extends Schema {
  up() {
    this.create('linguas', (table) => {
      table.increments()
      table.string('name')
      table.timestamps()
    })
  }

  down() {
    this.drop('linguas')
  }
}

module.exports = LinguaSchema
