(function() {
  var form={
    controller: "GetWords",
    templateUrl:"form.html"
};

  angular
    .module("storyApp")
    .component("form", form);
})();