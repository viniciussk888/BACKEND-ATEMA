'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AtemaSchema extends Schema {
  up() {
    this.create('atemas', (table) => {
      table.increments()
      table.string('mesorregiao').notNullable()
      table.string('microrregiao').notNullable()
      table.string('municipio').notNullable()
      table.string('elementogeografico')
      table.string('toponimo').notNullable()
      table.string('variante')
      table.string('tipo')
      table.string('area')
      table.string('linguaOrigem')
      table.string('etimologia')
      table.string('etimologiaEsc')
      table.string('taxionomia')
      table.string('estruturaMorfologica')
      table.string('referencias')
      table.string('fonte')
      table.string('dataColeta')
      table.string('responsavel')
      table.string('revisor')
      table.string('observacoes')
      // table.string('email', 254).notNullable().unique()
      table.timestamps()
    })
  }

  down() {
    this.drop('atemas')
  }
}

module.exports = AtemaSchema
