'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TaxonomiaSchema extends Schema {
  up() {
    this.create('taxonomias', (table) => {
      table.increments()
      table.string('name')
      table.timestamps()
    })
  }

  down() {
    this.drop('taxonomias')
  }
}

module.exports = TaxonomiaSchema
