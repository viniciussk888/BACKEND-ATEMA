'use strict'


const Route = use('Route')

Route.post('users', 'UserController.store');
Route.post('sessions', 'SessionController.store');
//recuperar senha
Route.post('passwords', 'ForgotPasswordController.store')
//ATEMA

Route.group(() => {
  Route.resource('atema', 'AtemaController').apiOnly()
  Route.resource('post', 'PostController').apiOnly()
}).middleware(['auth'])


