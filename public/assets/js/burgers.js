$(function () {
    $(".change-devour").on("click", function (event) {
        var id = $(this).data("id");
        var updated = {
            devoured: true
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: updated
        }).then(
            function () {
                console.log("devoured is true");
                // Reload the page to get the updated list
                location.reload();
            });
    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newName = $(["newName = burger_name"]).val().trim();
        if(newName !=="") {
            var burgerName = {
                newName: newName
            };
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: burgerName
        }).then(
            function() {
                console.log("created new burger name");
                // Reload the page to get the updated list
                location.reload();
            } 
        );
    });

   // might need an else function
});
    $(".delete-burgerr").on("click", function(event) {
        var id = $(this).data("id");
// Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function() {
                console.log("deleted burgers", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

