var assetsPath = 'assets/json/';

/* Chargement des images */
$(document).ready(function() {
  $('#index').hide();
  $('#bad-password').hide();
  $('#connection').show();
  $('#connect-form').submit(function() {
    $('#bad-password').hide();
    var password = $('#password').val();
    if(checkPassword(password)) {
      $('#connection').hide();
      $('#index').show();
      initGalleries();
    }
    else {
      $('#bad-password').show();
    }

    return false;
  });
});

/**
 * Galleries initialisation. 
 */
var initGalleries = function() {
  $('.galleries').on('click', function(e) {
    var id = $(e.target).attr('id');
    $.getJSON(assetsPath+id+'.json', function(data) {
      var gallery = blueimp.Gallery(data);
    });
  });
};

/**
 * Check password.
 *
 * @param password
 *
 * @return boolean
 */
var checkPassword = function(password) {
  Base64.extendString();
  if(password.toBase64() === "MjAwOTIwMTQ=") {
    return true;
  }

  return false;
};
