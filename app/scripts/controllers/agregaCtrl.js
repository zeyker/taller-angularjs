


(function(){
    angular.module('angularSpa')
    .controller('agregaCtrl', function($scope, $http,agregaService){
        
              
        $scope.logPost = function (){
            agregaService.addPost($scope.newNombre,
                $scope.newLastName
                )

            .success(function(data){
               
            })
            .error(function(error){
                $scope.status = 'Error al consultar por usuarios';
            });

           
        }


    });
    
})();
