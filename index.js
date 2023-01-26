document.addEventListener("DOMContentLoaded",function(){
    let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "#";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Food";
    heading_2.setAttribute("style","width:1000px");
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "Calories";
    let heading_4 = document.createElement('th');
    heading_4.innerHTML = "Carbs";
    let heading_5 = document.createElement('th');
    heading_5.innerHTML = "Fats";
    let heading_6 = document.createElement('th');
    heading_6.innerHTML = "Protein";
    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    row_1.appendChild(heading_5);
    row_1.appendChild(heading_6);
    thead.appendChild(row_1);

    // Adding the entire table to the body tag
    document.getElementById('tableFormat').appendChild(thead);

})
