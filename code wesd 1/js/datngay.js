$(document).ready(function() {
  $('#bookingForm').submit(function(event) {
      event.preventDefault(); 
      var formData = {
          fullName: $('#fullName').val(),
          phone: $('#phone').val(),
          email: $('#email').val(),
          passengerName: $('#passengerName').val(),
          dob: $('#dob').val(),
          deliveryAddress: $('#deliveryAddress').val(),
          flightRoute: $('#flightRoute').val(),
          departureTime: $('#departureTime').val(),
          airline: $('#airline').val(),
          bankInfo: $('#bankInfo').val()
      };

      localStorage.setItem('formData', JSON.stringify(formData));

   
    });
});
