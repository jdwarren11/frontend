describe('BusinessLogic', function() {

  describe('checkReservation', function() {
    it('checks reservations and does not find name', function() {
      var name = 'Jeremy';
      var check = bl.checkReservation(name);
      expect(check).toEqual('name not found');
    });
    it('checks reservation, finds name that is not claimed', function () {
      var name = 'Billy';
      var check = bl.checkReservation(name);
      expect(check).toEqual('found');
    });
  });


});