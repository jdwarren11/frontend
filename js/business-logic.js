(function() {
  var BusinessLogic = function() {
    // =======================================
    //          Application Logic
    // =======================================

    this.reservations = {
      'Billy': { claimed: false }
    };

    this.reserve = function(name) {
      check = _.contains(reservations, reservations[name]);
      if (check) {
        if (reservations[name]['claimed'] === false) {
          // alert('Please make the reservation under a different name');
          return "diff name"
        } 
      } else {
          // reservations[name] = {
          //     claimed: false
          // }
          return "create"
        }
    };

    this.checkReservation = function(name) {
        check = _.contains(reservations, reservations[name] );
        if (check) {
          if (reservations[name]['claimed'] === false) {
            alert("We found your reservation " + name);
            reservations[name]['claimed'] = true;
          } else {
            alert("This reservation has already been claimed.");
          }
        } else {
            alert("Sorry, no reservation under that name.");
        }
    };



  };

  window.bl = new BusinessLogic();
});