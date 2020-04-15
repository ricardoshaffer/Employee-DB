$(function() {
$(".update-employee").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var updateEmployee = {
        first_name: $("#first_name").val().trim(),
        last_name: $("#last_name").val().trim(),
        employee_ID: $("#employee_ID").val().trim(),
        title: $("#title").val().trim(),
        department: $("#department").val().trim(),
        salary: $("#salary").val().trim()
    };
    var id = $(this).data("id");
// Send the POST request.
        // $.ajax("/api/employees", {
        //     type: "POST",
        //     data: newQuote
        //   }).then(
        //     function() {
        //       console.log("created new quote");
        //       // Reload the page to get the updated list
        //       location.reload();
        //     }
        //   );
        // });
        

    // Send the PUT request.
    $.ajax("/api/update/" + id, {
      type: "PUT",
      data: updateEmployee
    }).then(
      function() {
        console.log("updated quote");
        // Reload the page to get the updated list
        location.assign("/update/:id");
      }
    );
  })

  $(".create-employee").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var createEmployee = {
        first_name: $("#first_name").val().trim(),
        last_name: $("#last_name").val().trim(),
        employee_ID: $("#employee_ID").val().trim(),
        title: $("#title").val().trim(),
        department: $("#department").val().trim(),
        salary: $("#salary").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/add", {
      type: "POST",
      data: createEmployee
    }).then(
      function() {
        location.reload();
      }
    );
  });


})