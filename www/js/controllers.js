// Initialize the Firebase SDK
  var config = {
    apiKey: 'AIzaSyBqle5HGppkx1RsDbs_WAQD_5rFt9WbJcI',
    authDomain: 'vamo-peru.firebaseapp.com',
    databaseURL: 'https://vamo-peru.firebaseio.com',
    storageBucket: 'gs://vamo-peru.appspot.com'
  };
  firebase.initializeApp(config);

angular.module('app.controllers', [])
  
.controller('cameraTabDefaultPageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('cartTabDefaultPageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('cloudTabDefaultPageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('pageCtrl', ['$scope', '$stateParams','$firebaseArray','$ionicModal', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$firebaseArray,$ionicModal) {




  $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope,
      animation: 'slide-in-up',
   }).then(function(modal) {

    $scope.modal = modal;
     
   });

    $scope.openModal = function(data) {

      $scope.modal.show();
   };
    
   $scope.closeModal = function(data) {

    console.log(data)

    $scope.nombre = data

      $scope.modal.hide();

   };







   var ref = firebase.database().ref().child("messages");

   console.log('hdhd',$scope.nombre)

   $scope.nombre=''
  // create a synchronized array
  // click on `index.html` above to see it used in the DOM!
  $scope.messages = $firebaseArray(ref);

    $scope.addMessage = function(data) {




    $scope.messages.$add({
      text: data,
      nombre:$scope.nombre
    });
  };

  $scope.newMessageText=''




}])
 