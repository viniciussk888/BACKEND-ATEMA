'use strict'

const Permission = use('App/Models/Permission')
class PermissionController {
  async index({ }) {
    const permissions = await Permission.all();

    return permissions
  }
  async store({ request }) {
    const data = request.all()
    const permission = await Permission.create(data)
    return permission;
  }
  async show({ params }) {
    const permission = await Permission.findOrFail(params.id)
    return permission
  }
  async update({ params, request }) {
    const permission = await Permission.findOrFail(params.id)
    const data = request.all()

    permission.merge(data)

    await permission.save()

    return permission
  }
  async destroy({ params }) {
    const permission = await Permission.findOrFail(params.id)

    await permission.delete()
  }
}

module.exports = PermissionController
