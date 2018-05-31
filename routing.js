"use strict";
{
  angular
    .module("profile")
    .config(($routeProvider) => {
      $routeProvider
        .when("/profile", {
          template: "<pro></pro>"
        })
        .when("/edit", {
          template: "<edit></edit>"
        })
        .otherwise({ redirectTo: "/profile" });
    });
}