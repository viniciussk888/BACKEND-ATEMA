'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PermissionSchema extends Schema {
  up() {
    this.create('permissions', (table) => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.boolean('delete')
      table.boolean('update')
      table.boolean('insert')
      table.boolean('blog')
      table.boolean('admin')
      table.timestamps()
    })
  }

  down() {
    this.drop('permissions')
  }
}

module.exports = PermissionSchema
