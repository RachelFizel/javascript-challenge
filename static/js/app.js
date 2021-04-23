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
var inputField = d3.select('#datetime')
var form = d3.select("form")

button.on("click", updateResults);
form.on("submit", updateResults);

//seperate function create table like 44-51


function updateResults(){  
     
     d3.event.preventDefault();

     console.log("change"); 
     
     var newText = inputField.property("value");
     console.log(newText);
     var filteredData = data.filter(ufoData => ufoData.datetime === newText);
     console.log(filteredData);

     var tbody = d3.select("tbody");
     //clear
     // var rows =  tbody.selectAll('tr');
     // rows.exit().remove();
     
     tbody.html("");
     
     filteredData.forEach((filteredData) => {
          
          var row = tbody.append("tr");
          Object.entries(filteredData).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
          });
     });
};
