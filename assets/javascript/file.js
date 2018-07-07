// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDLxT5a5u0n4BW-SSZ1Cnh57EVizpNgCs8",
    authDomain: "employee-data-management-63163.firebaseapp.com",
    databaseURL: "https://employee-data-management-63163.firebaseio.com",
    projectId: "employee-data-management-63163",
    storageBucket: "employee-data-management-63163.appspot.com",
    messagingSenderId: "465983376951"
  };
  firebase.initializeApp(config);

  // Create a variable to reference the database.
  var database = firebase.database();

  //initial rate
  var Rate="0";

  $("#submit").on("click", function(event) {
    event.preventDefault();
    debugger;
    // Get the input values
    var Ename = $("#name").val().trim();
    var Role = $("#role").val().trim();
    var Date1 =$("#date").val().trim();
    Rate = $("#rate").val().trim();

    database.ref().push({
      name: Ename,
      role:Role,
      date: Date1,
      rate:Rate
    });
    
  });
  database.ref().on("child_added", function(snapshot){
    debugger
  });

