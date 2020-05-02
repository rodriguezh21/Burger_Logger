console.log("this works")
$( document ).ready(function() {
$(".btnD").on("click", function(e){
    // e.preventDefault();
    console.log("Inside click event");

    var id = $(this).data("id");
    var newDevourStatus = {
        devoured: true
    }
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data:newDevourStatus
    }).then(function(){
        location.reload();
    })
    
})
});