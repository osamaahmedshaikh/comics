// var app = angular.module("myApp", []);
// app.controller("ctrl", function($scope) {


//   $scope.name = "Comic";
//   $scope.date = "";
//   $scope.news = "";
//   $scope.link = "";
// });
// var app = angular.module("myApp", []);
// app.controller("ctrl", function($scope,$http){
//   $http.get("http://localhost:8080/data/")
//         .then(function (response) { 
//           console.log(response)
//           $scope.name = response.data.name;
//           $scope.contacts = response.data.date;
//           $scope.Aboutme = response.data.news;
//           $scope.image = response.data.link;
//           console.log(response.data)
//          });
var app1  = angular.module("firstapp", []);

var someVarName = 614;
console.log(someVarName)
localStorage.setItem("someVarKey", someVarName)
var someVarName = parseInt(localStorage.getItem("someVarKey")) + 1;
console.log(someVarName)
localStorage.setItem("someVarKey", someVarName);
app1.controller("ctrl" , function($scope, $http){
  $http.get("http://localhost:8080/data/").then(function (response) {
    console.log(response.data) 
  });
  $http.get("https://xkcd.com/"+someVarName+"/info.0.json").then(function (response) {
    console.log(response.data)
    $scope.titles = response.data.safe_title
    $scope.name = response.data.title;
    $scope.dates = response.data.day;
    $scope.months = response.data.month;
    $scope.years = response.data.year;
    $scope.new = response.data.news;
    $scope.links = response.data.link;
    $scope.imagefile = response.data.img;
    $scope.trancript = (response.data.transcript).replace(/[[[|&;$%@"<>()}{+,¢£«±Ÿ÷&*()\/<>!@#$%^]/g, "");
  });
});
