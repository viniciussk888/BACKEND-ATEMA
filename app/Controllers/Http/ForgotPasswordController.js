'use strict'

const User = use('App/Models/User')
const crypto = require('crypto')
const Mail = use('Mail')

class ForgotPasswordController {
  async store({ request, response }) {
    try {
      const email = request.input('email')
      const user = await User.findByOrFail('email', email)

      user.token = crypto.randomBytes(10).toString('hex')
      user.token_created_at = new Date()

      await user.save()

      await Mail.raw(`Codigo para recuperação da senha "${user.token}" `, (message) => {
        message.subject('Recuperação de senha para sitema ATEMA')
        message.from('atemasistema@gmail.com')
        message.to(user.email)
      })
    } catch (error) {
      return response.status(error.status).send({ error: { message: 'Algo não deu certo, este email existe?' } })
    }
  }
  async validate({ request, response }) {
    try {
      const token = request.input('token')
      const user = await User.findByOrFail('token', token)

      return user.id
    } catch (error) {
      return response.status(error.status).send({ error: { message: 'Erro ao validar o código!' } })
    }
  }
  async update({ request, response }) {
    try {
      const { token, newPassword } = request.all()
      const user = await User.findByOrFail('token', token)
      user.token = null
      user.token_created_at = null
      user.password = newPassword;

      await user.save()

    } catch (error) {
      return response.status(error.status).send({ error: { message: 'Algo não deu certo ao resetar sua senha!' } })
    }

  }
}

module.exports = ForgotPasswordController
