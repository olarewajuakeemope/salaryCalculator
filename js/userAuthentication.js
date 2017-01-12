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

    $.getJSON("js/user.json", function(user) {
    user.interns.push("hello");
  })
}
