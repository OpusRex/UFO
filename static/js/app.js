//import the data from data.js
const tableData = data;

//reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }
/*
  //Create function to handle click events
  function handleClick(){
      //get datatime value from filter
      let date = d3.select("#datetime").property("value");
      let filteredData = tableData;
      //check for date being entered if true
      //filter using the entered date
    if (date) {
        //apply filter to the table data to only keep rows
        //where datetime value matches the filter value
        filteredData = filteredData.filter(row => row.datetime ===date);
    };
    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);

    }
*/

// This function will replace your handleClick function

function updateFilters() {
  var filters = 
    {"datetime": d3.select("#datetime").property("value").trim().toLowerCase(),
    "city": d3.select("#city").property("value").trim().toLowerCase(),
    "state": d3.select("#state").property("value").trim().toLowerCase(),
    "country": d3.select("#country").property("value").trim().toLowerCase(),
    "shape": d3.select("#shape").property("value").trim().toLowerCase()}
  ;

  // clear that filter from the html filters object
  d3.select("#datetime").property("value","");
  d3.select("#city").property("value","");
  d3.select("#state").property("value","");
  d3.select("#country").property("value","");
  d3.select("#shape").property("value","");

  // Call function to apply all filters and rebuild the table
  filterTable(filters);
}

function filterTable(filters) {

  // Set the filteredData to the tableData
  let filteredData = tableData;

  // Loop through all of the filters and keep any data that
  Object.keys(filters).forEach(function (key) {
    if(filters[key]!=="") {
      filteredData = filteredData.filter(row => row[key] === filters[key])
      }
  });

  // Finally, rebuild the table using the filtered Data
  buildTable(filteredData);
}

// Attach an event to listen for changes to each filter

// Hint: You'll need to select the event and what it is listening for within each set of parenthesis

//attach event listner for the form button
d3.select("#filter-btn").on("click", updateFilters);
//build table when page loads
buildTable(tableData); 



