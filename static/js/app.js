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
var button = d3.select('#filter-btn');
var inputDate = d3.select('#datetime');
var inputCity = d3.select('#city');
var inputState = d3.select('#state');
var inputCountry = d3.select('#country');
var inputShape = d3.select('#shape');
var form = d3.select('form');

button.on("click", updateResults);
//form.on("submit", formSubmit);
form.on("change", updateResults);


function updateResults(){  
     
     d3.event.preventDefault();

     console.log("change"); 
     
     var newDate = inputDate.property("value");
     var newCity = inputCity.property("value");
     var newState = inputState.property("value");
     var newCountry = inputCountry.property("value");
     var newShape = inputShape.property("value");

     
     
     var filteredData = data.filter(ufoData => (newDate == "" || ufoData.datetime == newDate) &&
                                               (newCity == "" || ufoData.city == newCity) &&
                                               (newState == "" || ufoData.state == newState) &&
                                               (newCountry == "" || ufoData.country == newCountry) &&
                                               (newShape == "" || ufoData.shape == newShape));

     var tbody = d3.select("tbody");
     
     displayResults(filteredData);
     
};



function displayResults(filteredData){
     
     tbody.html("");

     filteredData.forEach((filteredData) => {
          
          var row = tbody.append("tr");
          Object.entries(filteredData).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
          });
     });

}
