(function() {
  
  function Service($location) {
    
    var dogInfo = {};

    
    return {
      SetWords: SetWords,
      GetWords: GetWords
    };

    
    function SetWords(newInfo) {
      dogInfo = newInfo;
      console.log(dogInfo);
    
      $location.path("/form");
    }

  
    function GetWords() {
      return dogInfo;
    }
  }

  angular
    .module("storyApp")
    .factory("Service",Service);
})();