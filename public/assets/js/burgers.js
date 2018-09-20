$(function () {
    $(".change-devour").on("click", function (event) {
        var id = $(this).data("id");
        var updated = {
            devoured: true
        };

        // Send the PUT request.
        $.ajax("/api/burger/" + id, {
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
        //  prevent default on a submit event.
        event.preventDefault();

        var newName = $(["newName = burger_name"]).val().trim();
        if(newName !=="") {
            var burgerName = {
                newName: newName
            };
        };

        // Send the POST request.
        $.ajax("/api/burger", {
            type: "POST",
            data: burgerName
        }).then(
            function() {
                console.log("created new burger name");
                // Reload page
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
                // Reload page
                location.reload();
            }
        );
    });

