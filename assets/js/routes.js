/* ------------------------------
 * 
 * ------------------------------
 */
 var viewsPath = 'assets/views/';

 app
 .config(function($routeProvider, $locationProvider){
 	$locationProvider.html5Mode(true);

	//Define the custom routes
	$routeProvider
	.when('/', {
		templateUrl: viewsPath+'home.php',
		controller: 'HomeController'
	})
	.when('/login', {
		templateUrl: viewsPath+'login.php',
		controller: 'LoginController'
	})
	.when('/cadastro', {
		templateUrl: viewsPath+'signup.php',
		controller: 'SignUpController'
	})
	.when('/admin', {
		templateUrl: viewsPath+'admin.php',
		controller: 'AdminController'
	})
	.when('/page/:var', {
		templateUrl: viewsPath+'page.php',
		controller: 'PageController'
	})
	.otherwise({redirectTo: '/'});
});