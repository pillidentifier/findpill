// using Version 5.4.1
var jsdom = require('jsdom').jsdom;
var document = jsdom('<html></html>', {});
var window = document.defaultView;
var $ = require('jquery')(window);






var color = "ORANGE"
var shape = "ROUND"
var imprint = "30"

/* search for pill by parameters */
$.get( "https://rximage.nlm.nih.gov/api/rximage/1/rxnav?&resolution=full&color="+color+"&shape="+shape+"&imprint="+imprint+"", function( data ) {
var list = data["nlmRxImages"];
console.log(data)
console.log(list);
//console.log(dataList)
console.log("============================")
console.log("Pills Found: " + data["nlmRxImages"].length)
console.log("ID: " + list[1].id)
console.log("Image Location: " + list[1].imageUrl)
console.log("Manufacturer: " + list[1].labeler)
console.log("Pill Name: " + list[1].name)
});





/*

$.ajax({
    url: "https://reqres.in/api/users",
    type: "POST",
    data: {
        name: "paul rudd",
        movies: ["I Love You Man", "Role Models"]
    },
    success: function(response){
        console.log(response);
    }
});
*/  








