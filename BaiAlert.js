  //Alert
  alert("Hello worl");
  alert(1993);
  alert(true);

  //Confirm
  var result = confirm("Are you sure want to delete?");
  if (result == true) {
      alert("User accept");
  } else {
      alert("User deny");
  }

  //Prompt
  var input = prompt('Please enter your name', ' no name');
  if (input != null) {
      alert(input);
  }