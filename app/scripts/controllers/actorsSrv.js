angular.module('angularSpa')
    .service('actorsService', function($http){
        var urlBase = 'http://localhost:8080/sakila-backend-master/actors';
        this.getActors = function(){
            return $http.get(urlBase);
        };
    });
angular.module('angularSpa')
    .service('actorsdetailService', function($http){
        var urlBase = 'http://localhost:8080/sakila-backend-master/actors/';
        this.getActorsId = function(actorId){
            return $http.get(urlBase+actorId);
        };
    });


angular.module('angularSpa')
    .service('agregaService', function($http){
       

        this.addPost = function(nombre,lastNombre){
              var request = $http({
            method: "POST",
            url: "http://localhost:8080/sakila-backend-master/actors/",
            data: {
                    
                        firstName: nombre,
                lastName: lastNombre
                    },
            headers: {'Content-Type': 'application/json'}
            });
            return ( request);
        };


    });