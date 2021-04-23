console.log("app.js loaded");


//inital load of data to be displayed
var tbody = d3.select("tbody");
data.forEach((ufoSighting) => {
     //console.log(ufoSighting);
     var row = tbody.append("tr");
     Object.entries(ufoSighting).forEach(([key, value]) => {
       var cell = row.append("td");
       cell.text(value);
     });
});



//handle click event
var button = d3.select('#filter-btn')
var inputDate = d3.select('#datetime')
var inputCity = d3.select('#city')

var form = d3.select("form")

button.on("click", updateResults);
form.on("submit", updateResults);


//seperate function create table like 42-51

function updateResults(){  
     
     d3.event.preventDefault();

     console.log("change"); 
     
     var newDate = inputDate.property("value");
     var newCity = inputCity.property("value");
     console.log(newCity);
     console.log(newDate);

     var filteredData = data.filter(ufoData => ufoData.datetime === newDate &&
                                               ufoData.city === newCity);
     console.log(filteredData);

     var tbody = d3.select("tbody");
     
     displayResults(filteredData)
     
};

function displayResults(filteredData){
     console.log("made it into displayResults")
     tbody.html("");

     filteredData.forEach((filteredData) => {
          
          var row = tbody.append("tr");
          Object.entries(filteredData).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
          });
     });

}
