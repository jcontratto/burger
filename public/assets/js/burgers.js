$(function () {
    $(".change-devour").on("click", function (event) {
        var id = $(this).data("id");
        var updated = {
            devoured: true
        };

        // Send the PUT request.
        $.ajax("/api/burger" + id, {
            type: "PUT",
            data: updated
        }).then(
            function() {
                console.log("devoured is true");
                // Reload the page to get the updated list
                location.reload();
            });
    });

    $("#burgerSubmit").on("click", function(event) {
        //  prevent default on a submit event.
        event.preventDefault();
        console.log('called')

        // var newName = $(["newName = burger_name"]).val().trim();
        var newName = $("#name").val().trim();
        console.log('NEW NAME ', newName)
        if(newName !=="") {
            var burgerName = {
                newName: newName
            };
        };
        console.log('burgername ', burgerName)

        // Send the POST request.
        $.ajax("/api/burger", {
            type: "POST",
            data: burgerName
        }).then(
            function() {
                console.log("created new burger name");
                // Reload page
                // location.reload();
            } 
        );
    });

   // might need an else function
});
    $(".delete-burger").on("click", function(event) {
        var id = $(this).data("id");
// Send the DELETE request.
        $.ajax("/api/burger" + id, {
            type: "DELETE"
        }).then(
            function() {
                console.log("deleted burgers", id);
                // Reload page
                location.reload();
            }
        );
    });

