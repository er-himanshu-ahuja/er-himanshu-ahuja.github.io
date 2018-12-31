$(window).on('load', function () {
  "use strict";
  setTimeout(function () {
    $("#page-loader").addClass("hide-this").fadeOut(1000, function() { $(this).remove();});
  }, 300);
});
