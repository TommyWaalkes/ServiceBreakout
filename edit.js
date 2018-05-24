"use strict";
{
    let edit = {
        templateUrl :"edit.html",
        controller: function(userService){
            let vm = this;
            // vm.name = "Palpatine";
            // vm.contact = "IamtheSenate@emperor.com";
            // vm.bio ="Hey y'all my name shev, you may have heard of me, I run the galaxy, and I love power, and blowing up planets";
            vm.user = userService.getUser();
            vm.update = function(){
                userService.setUser(vm.user);
            }
        }
    }
    edit.$inject = ["userService"];

    angular
        .module("profile")
        .component("edit", edit);
}