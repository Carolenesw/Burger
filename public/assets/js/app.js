$(function (){

    $(".create-form").on("submit", function(event) {
      // preventDefault on a submit event.
      event.preventDefault();
      
      let newBurger= {
          burger_name: $("#burger_input").val().trim()
      };
  
      // Send the POST request 
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(function(res) {
          // Reload the page to get the updated list
          console.log
          location.reload();
        });
    });
})