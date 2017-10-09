// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
  })

  .state('app.cachorros', {
    url: '/cachorros',
    views: {
      'menuContent': {
        templateUrl: 'templates/listaanimais.html',
        controller: 'CachorrosCtrl'
      }
    }
  })

  .state('app.gatos', {
      url: '/gatos',
      views: {
        'menuContent': {
          templateUrl: 'templates/listaanimais.html',
          controller: 'GatosCtrl'
        }
      }
    })
    .state('app.perfil', {
      url: '/perfil',
      views: {
        'menuContent': {
          templateUrl: 'templates/perfil.html',
          controller: 'PerfilCtrl'
        }
      }
  })
  .state('app.cachorros', {
    url: '/cachorros/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/animal.html',
        controller: 'CachorrosCtrl'
      }
    }
  })

  .state('app.gatos', {
      url: '/gatos',
      views: {
        'menuContent': {
          templateUrl: 'templates/listaanimais.html',
          controller: 'GatosCtrl'
        }
      }
    })
  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/gatos');
});
