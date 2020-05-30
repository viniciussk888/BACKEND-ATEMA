'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ElementoSchema extends Schema {
  up() {
    this.create('elementos', (table) => {
      table.increments()
      table.string('name')
      table.timestamps()
    })
  }

  down() {
    this.drop('elementos')
  }
}

module.exports = ElementoSchema
