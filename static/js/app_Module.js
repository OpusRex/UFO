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
//attach event listner for the form button
d3.select("#filter-btn").on("click", handleClick);
//build table when page loads
buildTable(tableData); 



