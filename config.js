(function() {
  
  angular
    .module("storyApp")
    .config(function($routeProvider) {
      $routeProvider

        .when("/form-", {
        
          templateUrl:`` ,
       
          controller: "SetWords as dog"
        })
    
        .when("/story", {
        
          template: `<p> {{ dog.dogInfo.name }} {{ dog.dogInfo.age }} {{ dog.dogInfo.breed }} {{ dog.dogInfo.favFood }} </p>`,
      
          controller: "GetWords as dog"
        })
        
        
    });
})();