//Question->1
////How to compare two JSON have the same properties without order
let obj1 = {name: "person1", age: 5};
let obj2 = {age: 5, name: "person1"};

var assumption = true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
for(let key in obj1) { 
if(obj1[key] == obj2[key]) {
    continue;
}
 else {
        assumption = false;
        break;
     }
    }
}
else {
    assumption = false;
}
console.log(assumption);


//Question->2
//Use the rest countries given api url and display all the country flag in console

//1st step : create a XHR object
var request = new XMLHttpRequest();
//2nd step: API URL
//.open method
//2 parameters

request.open("GET","https://restcountries.com/v2/all");

//3rd step : establishing the bridge

request.send();

//4th step : once the data sucessfully received from server
//onload in the function

request.onload = function(){
    var result = JSON.parse(request.response);
    for(let i = 0 ; i< result.length ; i++){
        console.log(result[i].flags);

    }
}


//Question-> 3
//Use rest countries api url and print all countries names,regions,subregion and populations
//1st step : create a XHR object

var request = new XMLHttpRequest();

//2nd step: API URL
//.open method

request.open("GET","https://restcountries.com/v2/all");

//3rd step : establishing the bridge

request.send();

//4th step : once the data sucessfully received from server
//onload is an event

request.onload = function(){
    var result = JSON.parse(request.response);
    for(let i = 0 ; i< result.length ; i++){
        console.log(result[i].name);
        console.log(result[i].region);
        console.log(result[i].subregion); 
        console.log(result[i].population);    

}
}


