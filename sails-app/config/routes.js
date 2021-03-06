/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` your home page.            *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  '/': {
    view: 'rent/home'
  },

  /***************************************************************************
   *                                                                          *
   * More custom routes here...                                               *
   * (See https://sailsjs.com/config/routes for examples.)                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the routes in this file, it   *
   * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
   * not match any of those, it is matched against static assets.             *
   *                                                                          *
   ***************************************************************************/
  'GET /rent/create': 'RentController.create', //create
  'POST /rent/create': 'RentController.create', //create

  'GET /rent/json': 'RentController.json',
  'GET /rent/viewAllDate': 'RentController.viewAllDate', //viewAllDate
  'GET /rent/view/:id': 'RentController.view',
  
  'DELETE /rent/:id': 'RentController.delete', //delete
  
  'GET /rent/update/:id': 'RentController.update', //update
  'POST /rent/update/:id': 'RentController.update', //update

  'GET /rent/paginate': 'RentController.paginate',
  'GET /rent/jpaginate': 'RentController.jpaginate',
  'GET /rent/jjpaginate': 'RentController.jjpaginate',
  'POST /rent/paginate': 'RentController.paginate',
  'GET /rent/details/:id': 'RentController.details',

  '/': 'RentController.home',

  'GET /rent/home': 'RentController.home',
  
  'GET /rent/jhome': 'RentController.jhome',
  'GET /rent/jestate': 'RentController.jestate',

  'GET /user/login': 'UserController.login',
  'POST /user/login': 'UserController.login',
  'POST /user/logout': 'UserController.logout',

  'POST /user/add': 'UserController.add',

  'GET /rent/:id/rentby': 'RentController.populate',
  'GET /user/:id/renting': 'UserController.populate',
  'POST /user/:id/renting/add/:fk': 'UserController.add',
  'GET /user/:id/renting/add/:fk': 'UserController.add',
  'POST /user/:id/renting/remove/:fk': 'UserController.remove',
};
