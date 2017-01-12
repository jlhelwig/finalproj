/*
=======================================================

    ** Week 7 - Project 1  **
*** Ajax and JSON with OMDB ***

This assignment is more open than the past assignments.
You are free to build a simple web page that interacts
with OMBD. It can simply display data within the HTML
page or buttons and text fields can be added to interact
with the data and update the page accordingly.

Have fun!

=======================================================
*/
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>

var x=1
console.log(x);
// var xhr = new XMLHttpRequest();
//
// xhr.addEventListener('load', function() {
//     if (xhr.status !== 200) {
//        return;
//     }
//
//     var data = JSON.parse(xhr.responseText);
//
//     console.log(data); });
var $xhr = $.getJSON("http://api.openweathermap.org/data/2.5/forecast/city?id=4671654&APPID=7e318ef8ce6a59d9c41331fe20783a7b");

$xhr.done(function(data) {
    if ($xhr.status !== 200) {
        return;
    }
console.log(main.pressure);





xhr.open('GET', "http://api.openweathermap.org/data/2.5/forecast/city?id=4671654&APPID=7e318ef8ce6a59d9c41331fe20783a7b");
xhr.send();
