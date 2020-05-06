console.log("Welcome to Burger Logger!")
$( document ).ready(function() {

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          burger_name: $("#ca").val().trim(),
          devoured: $("[name=devour]:checked").val()
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            // Reload the page to get the updated list
            location.reload();
            
          }
        );
      });

$(".btnD").on("click", function(e){
    // e.preventDefault();
    

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
$(".btn").on("click", function(e){
    // e.preventDefault();
    

    var id = $(this).data("id");
    
    $.ajax("/api/burgers/" + id, {
        type: "DELETE"
    }).then(function(){
        location.reload();
    })
    
})
});