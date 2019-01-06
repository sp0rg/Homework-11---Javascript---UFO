// from data.js
var tableData = data;

// YOUR CODE HERE!

// submit variable tied to the button in index.html
var submit = d3.select("#filter-btn");

submit.on("click", function(){
    
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element
    var inputElement = d3.select("#datetime");

    // select value property of the input element
    var inputValue = inputElement.property("value");


    console.log(tableData);
    console.log(inputValue);


    var dataFilter = tableData.filter(ufo => ufo.datetime === inputValue);

    console.log(dataFilter);
    
    // had to reference the buildTable function in order to filter
    // because, you know, "aliens"
    buildTable(dataFilter);
});

// building the table
function buildTable(table){

    var tbody = d3.select("tbody");
    tbody.html("");

    console.log(table);

    // https://www.w3schools.com/jsref/jsref_foreach.asp
    // syntax: array.forEach(function(currentValue, index, arr), thisValue)
    table.forEach(function(ufoTable){
    console.log(ufoTable);
    });

    // Populates each row (tr) with data (td)
    table.forEach(function(ufoTable){
        var row=tbody.append("tr");

        Object.entries(ufoTable).forEach(function([key, value]) {
            console.log(key, value);
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
};

buildTable(data);