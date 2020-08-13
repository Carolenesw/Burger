$(function () {
  // on click event capture new burger name
  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    let newBurger = {
      burger_name: $("#burger_input").val().trim(),
    };

    // Send the POST request for new burger object
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function (res) {
      // Reload the page to get the updated list
      console.log;
      location.reload();
    });
  });

  //   create on click to change burger state/status
  $(".dev_burger").on("click", function (event) {
    let id = $(this).data("id");
    let newState = {
      devoured: 1,
    };

    // use PUT to update burger status
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newState,
    }).then(function () {

    });
    location.reload();
  });
});
