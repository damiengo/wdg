
/* Anchor initializing */
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

/* Wow initializing */
new WOW().init();

/* Sending response */
$("#submitForm").click(function() {
    $.post("api.php/response", 
           {
              "name":    $("#name").val(), 
              "email":   $("#email").val(), 
              "message": $("#response").val()
           }, 
           function(response) {
               console.log(response);
               if(response.success) {

               }
           }
    );

    return false;
});
