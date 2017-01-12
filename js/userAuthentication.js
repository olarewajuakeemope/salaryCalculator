function userAuthentication(form) { //to be edited
  var theUsername = form.username.value;
  var thePassword = form.password.value;

  $.getJSON("js/user.json", function(user) {
    if (theUsername === user.username && thePassword === user.password) {
      console.log('here');
      window.open("salaryCalculator.html"); //to be edited
    } else {
      document.getElementById('failed').innerHTML = "Please enter the correct user details"
    }
  })
}

function employeeAdder(form) {
   //define employers list
   //add to the list
   var level = form.level.value;
   var employees;
   if(localStorage.getItem('employees')) {
     employees = JSON.parse(localStorage.getItem('employees'));
   }
   else {
     employees = [];
   }
   
   var newEmployee = {
   	  name : form.name.value,
   	  level : level
   }

   $.getJSON("js/salary.json", function(salary) {
       newEmployee.salary = salary[level];
       employees.push(newEmployee);
       localStorage.setItem('employees', JSON.stringify(employees));
   })
   

}


function getEmployeeDetails(level) {
   if(localStorage.getItem('employees')) {
      employees = JSON.parse(localStorage.getItem('employees'));
   }
   else {
      employees = [];
   }
}