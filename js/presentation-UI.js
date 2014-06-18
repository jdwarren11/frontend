(function() {

    $('#claim').on('click', function() {
      // var name = prompt("What is your name?");
      // console.log("working");
      var name = $('#claim-input').val();
      console.log('Name to claim reservation', name);

      var claim = bl.checkReservation(name);

      if (claim === "found") {
        
        $('#res-left').text('We found your reservation ' + name);
      } else if (claim === "claimed") {
        
        $('#res-left').text('This reservation has already been claimed.');
      } else if (claim === "name not found") {
        
        $('#res-left').text('Sorry, no reservation under that name.');
      }

    });

    $('#reserve').on('click', function (e) {
      // var name = prompt("What name should we reserve under?");
      // console.log("working");

      var name = $('#make-input').val();
      console.log('Name to make reservation', name);

      var new_res = bl.reserve(name);

      if (new_res === "diff name") {
        //stuff
        $('#res-right').text('Please make the reservation under a different name.');
      } else if (new_res === "create") {
        // stuff
        $('#res-right').text('Your reservation has been made ' + name);
      }
    });


})();