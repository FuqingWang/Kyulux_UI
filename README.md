# Kyulux_UI

# Objective
The objective of this project is to create a app that consumes a Restful API and display the response in a data table format.
Additional features are 1.dynamic building 2.sorting 3.searching 4.pagination 

The DataTable component dynamically builds an array of objects into a table format.
To sort, simply click on the column header. You could also choose either ascending or descending sort in the header menu.
To search, click on the header menu - filter. You could also search by specify keys in multiple columns. 
Pagination is default to 20 per page, and it can be set from the DataTable component.

Note: 
The props for DataTable.js has to be in the form of an array of objects
The table currently doesn't consume nested objects, if one is found it displays [Object object].

# Technical details
The project uses React as base framework(https://reactjs.org/), the table component is built with the help of material-ui(https://material-ui.com/).
The project line up is straight forward, the Restful API call is first consumed in App.js, then the result is passed to DataTable.js to build out the table.

# run instructions
For install and run instructions, please go to /app folder.

