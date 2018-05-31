"use strict";
{
    let pro = {
        templateUrl :"profile.html",
        controller: function(userService, $location){
            let vm = this;
            // vm.name = "Palpatine";
            // vm.contact = "IamtheSenate@emperor.com";
            // vm.bio ="Hey y'all my name shev, you may have heard of me, I run the galaxy, and I love power, and blowing up planets";

            vm.user = userService.getUser();

            vm.editProfile = function(){
                $location.path("/edit");
            }
        }

    }

    pro.$inject = ["userService","$location"];
    angular
        .module("profile")
        .component("pro", pro);
}