(function() {
  var form={
    controller: "GetWords",
    template:`
 
 <input type="text" ng-model="info">
 <input type="text" ng-model="info">
 <input type="text ng-model="info">
 <input type="text" ng-model="info">
 <button> read story </button>
`
};

  angular
    .module("storyApp")
    .component("form", form);
})();