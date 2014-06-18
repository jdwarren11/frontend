(function() {

    $('#claim').on('click', function (e) {
      var name = prompt("What is your name?");
      checkReservation(name);
    });

    $('#reserve').on('click', function (e) {
      var name = prompt("What name should we reserve under?");
      reserve(name);
    });


});