
// on click
$(".submit").on("click",function(event){
    event.preventDefault();
    var name=$("#name").val();
    var role=$("#role").val();
    var rate=$("#rate").val();
    var dataObject={
        name:name,
        role:role,
        rate:rate,}
    console.log(dataObject);

});
