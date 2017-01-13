function userAuthentication(form) { //to be edited
  var theUsername = form.username.value;
  var thePassword = form.password.value;

  $.getJSON("js/user.json", function(user) {
    if (theUsername === user.username && thePassword === user.password) {
      
      window.open("salaryCalculator.html"); //to be edited
    } else {
      $("#failed").html("Please enter the correct user details");
    }
  })
}

function employeeAdder(form) {
  //define employers list
  //add to the list
  var level = form.level.value;
  var employees;
  if (localStorage.getItem('employees')) {
    employees = JSON.parse(localStorage.getItem('employees'));
  } else {
    employees = [];
  }

  var newEmployee = {
    name: form.name.value,
    level: level
  }

  $.getJSON("js/salary.json", function(salary) {
    newEmployee.salary = salary[level];
    employees.push(newEmployee);
    localStorage.setItem('employees', JSON.stringify(employees));
  })


}


function getEmployeeDetails(name) {
  if (localStorage.getItem('employees')) {
    employees = JSON.parse(localStorage.getItem('employees'));
  } else {
    employees = [];
  }
 for(var i=0; i<employees.length; i++){

  if(employees[i].name===name){
  var newOutput = "<p>Name: " + employees[i].name +  "</p><p>Level: " + employees[i].level + "</p><p>Basic salary: " + employees[i].salary.basic_salary + "</p>" + "<p>Housing allowance: " + employees[i].salary.housing_allowance + "</p>" + "<p>Health allowance: " + employees[i].salary.health_allowance + "</p>" + "<p>Monthly allowance: " + employees[i].salary.monthly_allowance + "</p>" + "<p>Transport allowance: " + employees[i].salary.transport_allowance + "</p>" + "<p>Total salary: " + employees[i].salary.total_salary + "</p>";
    }
  }
  $("#show").html(newOutput);
}

function showEmployees(level) {
  if (localStorage.getItem('employees')) {
    employees = JSON.parse(localStorage.getItem('employees'));
    var count = 0;
    var output = "";
    for(var i=0; i<employees.length; i++){

    if(employees[i].level===level){
      var employeesname = JSON.stringify(employees[i].name);
      output += "<form><input type='button' value=" + employeesname + " onClick='getEmployeeDetails(" + employeesname + ");'> <br></form>";
      count++;
     }
     if(count===0){
     	$("#display").html("<p>There are no employees in this level yet. Please add new</p>");
     	$("#show").html("");
     }else{
     	$("#display").html("<h5>List of Employees</h5>" + output);
     	$("#show").html("");
     }
    }

  } else {
  	$("#display").html("<p>There are no employees in this level yet. Please add new</p>");
    employees = [];
  }
}
