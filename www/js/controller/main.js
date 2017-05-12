/**
 * Created by BPIPO on 07/12/2016.
 */
angular.module('visitario', ['ngRoute'])
.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/principal.html'
    })
        .when('/banheiros',{
            templateUrl: 'templates/banheiros.html',
            controller: 'ListaController'
        })
        .when('/comer',{
            templateUrl: 'templates/comer.html',
            controller: 'ListaController'
        })
        .when('/delegacias',{
            templateUrl: 'templates/delegacias.html',
            controller: 'ListaController'
        })
        .when('/dormir',{
            templateUrl: 'templates/dormir.html',
            controller: 'ListaController'
        })
        .when('/eventos',{
            templateUrl: 'templates/eventos.html',
            controller: 'ListaController'
        })
        .when('/hospitais',{
            templateUrl: 'templates/hospitais.html',
            controller: 'ListaController'
        })
        .when('/praias',{
            templateUrl: 'templates/praias.html',
            controller: 'ListaController'
        })
        .when('/turismo',{
            templateUrl: 'templates/turismo.html',
            controller: 'ListaController'
        })
        .otherwise({redirectTo: '/'})
});