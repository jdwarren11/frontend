(function() {
  var BusinessLogic = function() {
    // =======================================
    //          Application Logic
    // =======================================

    this.reservations = {
      'Billy': { claimed: false }
    };

    this.checkReservation = function(name) {
        check = _.contains(this.reservations, this.reservations[name] );
        if (check) {
          if (this.reservations[name]['claimed'] === false) {
            // alert("We found your reservation " + name);
            this.reservations[name]['claimed'] = true;
            return "found";
          } else {
            // alert("This reservation has already been claimed.");
            return "claimed";
          }
        } else {
            // alert("Sorry, no reservation under that name.");
            return "name not found";
        }
    };

    this.reserve = function(name) {
      check = _.contains(this.reservations, this.reservations[name]);
      if (check) {
        if (this.reservations[name]['claimed'] === false) {
          // alert('Please make the reservation under a different name');
          return "diff name";
        } 
      } else {
          this.reservations[name] = {
              claimed: false
          }
          // alert('Your reservation has been made ' + name );
          return "create";
        }
    };

  };

  window.bl = new BusinessLogic();
})();