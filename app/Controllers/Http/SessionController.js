'use strict'

const User = use('App/Models/User')

class SessionController {
  async store({ request, response, auth }) {
    const { email, password } = request.all()

    const token = await auth.attempt(email, password)

    const user = await User.findByOrFail('email', email)


    return ([token,
      {
        "username": user.username,
        "admin": user.admin,
        "update": user.update,
        "delete": user.delete,
        "insert": user.insert,
        "blog": user.blog
      }])
  }
}

module.exports = SessionController
