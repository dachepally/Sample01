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
    }, false);
   
  })();

  $('#myModal').on('hide.bs.modal', function (e) {
    var formsElements = document.getElementsByClassName('tab-pane fade show active text-align form-new');
    if(formsElements[0].id == "admin"){
        window.location.href = "C:/Users/S533980/Desktop/Sample01/admin.html";
        
    }
    else{
        window.location.href = "https://dachepally.github.io/Sample01/calendar.html";
        
    }
  });

  function goToRegister(){
    window.location.href = "https://dachepally.github.io/Sample01/register.html";
    
  }

