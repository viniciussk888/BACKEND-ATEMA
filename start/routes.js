'use strict'


const Route = use('Route')


Route.post('sessions', 'SessionController.store');
Route.post('filter', 'FilterController.filter');
Route.post('passwords', 'ForgotPasswordController.store')
Route.post('validate', 'ForgotPasswordController.validate')
Route.put('passwords', 'ForgotPasswordController.update')
Route.get('files/:id', 'FileController.show');
Route.resource('post', 'PostController').apiOnly()
Route.post('relate', 'RelateController.relate');
//ATEMA

Route.group(() => {
  Route.post('users', 'UserController.store');
  Route.get('users', 'UserController.index');
  Route.delete('users/:id', 'UserController.destroy');
  Route.resource('atema', 'AtemaController').apiOnly()
  Route.resource('elemento', 'ElementoController').apiOnly()
  Route.resource('lingua', 'LinguaController').apiOnly()
  Route.resource('etimologia', 'EtimologiaController').apiOnly()
  Route.resource('taxonomia', 'TaxonomiaController').apiOnly()
  Route.post('files', 'FileController.store')
}).middleware(['auth'])


