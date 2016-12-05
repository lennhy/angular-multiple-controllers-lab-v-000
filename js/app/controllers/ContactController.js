function ContactController(){
  var vm = this;

  vm.name = "Bill";
  vm.email = "billcossa@gmail.com";
  vm.phone = "899-988-2999";

  this.changeName = function(){
    vm.name = "Bill Blanks!";
  };
}

angular
    .module('app')
    .controller('ContactController', ContactController);
