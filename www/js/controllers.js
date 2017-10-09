angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  $scope.loginData = {};

  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  $scope.login = function() {
    $scope.modal.show();
  };

  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('CachorrosCtrl', function($scope) {
  $scope.titulo="Busca pro cachorros";
  $scope.animais = [{
    "id":1
    "nome":"Thor",
    "descricao":"Pensando mais a longo prazo, o início da atividade de formação",
    "contato":"2345678",
    "imagem":"http://lorempixel.com/300/150/animals/55"
  },
  {
    "id":2
    "nome":"Eike",
    "descricao":"Pensando mais a longo prazo, o início da atividade de formação",
    "contato":"321321321",
    "imagem":"http://lorempixel.com/300/150/animals/55"
  },
  {
    "id":3
    "nome":"Cunha",
    "descricao":"Pensando mais a longo prazo, o início da atividade de formação",
    "contato":"765765765",
    "imagem":"http://lorempixel.com/300/150/animals/55"
  },
  {
    "id":4
    "nome":"Aecio",
    "descricao":"Pensando mais a longo prazo, o início da atividade de formação",
    "contato":"2355678",
    "imagem":"http://lorempixel.com/300/150/animals/55"
    }];
})
.controller('GatosCtrl', function($scope) {
  $scope.animais = [];
})
.controller('PerfilCtrl', function($scope) {
})
;
