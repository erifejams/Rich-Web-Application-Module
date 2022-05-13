// this is the check the validations required for all the input form
function validateform() {
  var name = document.getElementById('validateContactName').value;
  var number = document.getElementById('validateMobileNumber').value;
  var email = document.getElementById('validateEmail').value;

  if (name.match(/[a-zA-Z][a-zA-Z ]+/) && number.match(/[0-9 ]+/) && email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    addValidToTable();
  } else if (name == "" || number == "" || email == "") {
    document.getElementById("error").innerHTML = alert("Please fill out all input");
  } else {
    document.getElementById("error").innerHTML = alert("Error in Input format");
  }
}

// to add valid inputs to the table
function addValidToTable() {
  var table = document.getElementById("myTable");
  name = document.getElementById("validateContactName").value;
  email = document.getElementById("validateEmail").value;
  number = document.getElementById("validateMobileNumber").value;
  table.innerHTML += ('<tr><td>' + name + '</td><td>' + number + '</td><td>' + email + '</td></tr>')

  //all fields will be reset to empty, after values are entered in the box
  document.getElementById('validateContactName').value = "";
  document.getElementById('validateMobileNumber').value = "";
  document.getElementById('validateEmail').value = "";
}

//got this code online
function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc";
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("TR");
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < rows.length - 1; i++) { //Change i=0 if you have the header th a separate table.
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount++;
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function searchNumber() {
  // Declare variables
  var input, table, tr, td, i, txtValue;
  input = document.getElementById("mobileSearchInput");
  table = document.getElementById("myTable");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementById("myTable");
    if (td) {
      txtValue = td.textContent || td.innerText;
      console.log(txtValue)
      if (txtValue.size > -1) {
        tr[i].style.display = "";
      } else {
        document.getElementById("noResult").innerHTML = alert("no matching number");
      }
    }
  }
}
