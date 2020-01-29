// Write your click handler and conditionals here
$("button").click(function() {
    let Food=$("#Food").val();
    let age=$("#age").val();
    if (age>30 && Food==="pasta" ){
        $("#answer-header").text("Ann Perkins");
    } else if (age<30 && Food==="pizza") {
        $("#answer-header").text("Ron Swanson");
    }else if (age>30 && Food==="pizza") {
        $("#answer-header").text("April Ludgate"); 
    }else if (age<30 && Food==="pasta") {
        $("#answer-header").text("Leslie Knopp")
    }
});
