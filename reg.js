function displayInfo(){
    //Get the varible of the input fields
    var fname = document.getElementById("fn").value;
    var lname = document.getElementById("ln").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;

    //create a new row in tbale output by js
    var table = document.getElementById("otable").getElementsByTagName('tbody')[0]; //<tr>...</tr>
    var row = table.insertRow(-1);

    //get data taht input field value into the row cells
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = fname;
    cell2.innerHTML = lname;
    cell3.innerHTML = age;
    cell4.innerHTML = email;
    
    document.getElementById("fname").value="";
    document.getElementById("lname").value="";
    document.getElementById("age").value="";
    document.getElementById("email").value="";

}