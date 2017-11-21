(function() {
  
  function GetWords(Service) {
    var vm = this;
    
    vm.dogInfo = Service.GetWords();
    console.log(vm.dogInfo);
  }

  angular 
    .module("storyApp")
    .controller("GetWords", GetWords);
})();