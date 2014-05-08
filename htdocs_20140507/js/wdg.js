
/**
 * On loading complete.
 */
$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() > 100){
            $('#scrollTop').stop().animate({
                top: $(window).height() - 30 + "px"
                }, 500);
        }
        else{
            $('#scrollTop').stop().animate({
               top: $(window).height() + 100 + "px"
            }, 500);
        }
    });

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
                  $("#responseConfirm strong").text('Merci pour votre réponse!');
                  $("#responseConfirm").show();
               }
        );

        return false;
    });

    /* Hiding response confirm */
    $("#responseConfirm").hide();

});
