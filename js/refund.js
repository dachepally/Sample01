(function() {
    
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated'); 
          if (form.checkValidity()) {
            $('#myModal').modal('show');
            event.preventDefault();
            event.stopPropagation();
          }  
        }, false);
        
      });
      $('#myModal').on('hidden.bs.modal', function (e) {
        window.location.href = "C:/Users/s533980/Desktop/Sample01/user.html";
    
  });
    }, false);
   
  })();
  
  