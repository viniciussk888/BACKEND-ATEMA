'use strict'


const Route = use('Route')


Route.post('sessions', 'SessionController.store');
Route.post('filter', 'FilterController.filter');
Route.post('passwords', 'ForgotPasswordController.store')
Route.get('passwords/:id', 'ForgotPasswordController.store')
//ATEMA

Route.group(() => {
  Route.post('users', 'UserController.store');
  Route.get('users', 'UserController.index');
  Route.delete('users/:id', 'UserController.destroy');
  Route.resource('atema', 'AtemaController').apiOnly()
  Route.resource('post', 'PostController').apiOnly()
}).middleware(['auth'])


