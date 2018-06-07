"use strict";
{
    function userService(){
        let user ={
            name: "Palpy",
            contact: "PalyBoi@IamtheSentate.com",
            bio: "I run the universe, GOML"
        }
    const getUser = function(){
        return user;
    };

    const setUser = function(newUser){
        user = newUser;
    };

    return {
        getUser,
        setUser
    }
}


    angular
    .module("profile")
    .factory("userService", userService)

}