'use strict'

const User = use('App/Models/User')

class UserController {
  async index({ }) {
    const user = await User.all();

    return user
  }
  async store({ request }) {
    const data = request.only(['username', 'password', 'email', 'delete', 'insert', 'update', 'blog', 'admin'])

    const user = await User.create(data)

    return user
  }
}

module.exports = UserController
