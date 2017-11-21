(function() {
  
  function SetWords(Service) {
    var vm = this;
    vm.addDogInfo = function(newInfo) {
      Service.SetWords(newInfo);
    };
  }

  angular
    .module("storyApp")
    .controller("SetWords", SetWords);
})();