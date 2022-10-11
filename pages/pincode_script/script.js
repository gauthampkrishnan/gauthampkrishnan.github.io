$(function(){
function is_int(value) {
    if ((parseFloat(value) == parseInt(value)) && !isNaN(value)) {
      return true;
    } else {
      return false;
    }
  }  
  $("#zip").keyup(function() {
    // Cache
    var el = $(this);
  
    // Did they type five integers?
    if ((el.val().length == 5) && (is_int(el.val()))) {
  
      // Call Ziptastic for information
      $.ajax({
        url: "https://zip.getziptastic.com/v2/US/" + el.val(),
        cache: false,
        dataType: "json",
        type: "GET",
        success: function(result, success) {
            console.log(result)
          $("#city").val(result.city);
          $("#state").val(result.state);
          $("#country").val(result.country)
          $("#address-line-1").show().focus();
        },
        error: function(result, success) {
          console.log("Error")
        }
      });
  
    } else if (el.val().length < 5) {
      $(".zip-error").slideUp(200);
    };
  })
  });