// variables for clicks
var submitButton =$(".submit");
var name=$("#name").val();
var role=$("#role").val();
var rate=$("rate").val();
console.log(name);
console.log(role);
console.log(rate);

// on click
$(".submit").on("click",function (){
    $("#test").text(name);
    console.log(role+rate+name);

});