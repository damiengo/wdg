
/* Index background images */
var indexBack = [
  "img/back1.png", 
  "img/back2.png"
];
var indexBackCurrent = 0;

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
              scrollTop: target.offset().top - 50
            }, 1000);
            return false;
          }
        }
      });
    });

    /* Index background change */
    setInterval("changeIndexBackground()", 6000);

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

    /* Map initializing */
    var map = L.map('map').setView([47.960, -1.900], 12);

    /* Map layer */
    L.tileLayer('http://{s}.tiles.mapbox.com/v3/damaiengo.i6jjbejc/{z}/{x}/{y}.png', {
      maxZoom: 18
    }).addTo(map);

    /* 1st indicator */
    var circle1 = L.circle([47.966, -1.797], 600, {
      stroke: false, 
      color: '#2A6496',
      fillColor: '#2A6496',
      fillOpacity: 0.4
    }).addTo(map);

    /* 2nd indicator */
    var circle2 = L.circle([47.9505, -1.977], 600, {
      stroke: false, 
      color: '#2A6496',
      fillColor: '#2A6496',
      fillOpacity: 0.4
    }).addTo(map);

});

/**
 * Changing the index background image.
 */
var changeIndexBackground = function() {
  indexBackCurrent++;
  if(indexBackCurrent >= indexBack.length) {
    indexBackCurrent = 0;
  }
  $("#index").fadeTo("slow", 0.1, function() {
    $(this).css("background-image", "url("+indexBack[indexBackCurrent]+")");
  }).fadeTo("slow", 1);
}

