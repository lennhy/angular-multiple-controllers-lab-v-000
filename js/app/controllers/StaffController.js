function StaffController(){
  var vm = this;

  vm.name = "Human Resources";
  vm.email = "hr@gmail.com";
  vm.phone = "999-988-2999";

  this.changeName = function(){
    vm.name = "Human Management!";
  };
}

angular
    .module('app')
    .controller('StaffController', StaffController);
