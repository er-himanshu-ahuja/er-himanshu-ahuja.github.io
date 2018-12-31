(function () {
  "use strict";

  function fadeOutAndRemove(el) {
    var fadeTarget = el;
    var fadeEffect = setInterval(function () {
      if (!fadeTarget.style.opacity) {
        fadeTarget.style.opacity = 1;
      }
      if (fadeTarget.style.opacity > 0) {
        fadeTarget.style.opacity -= 0.1;
      } else {
        clearInterval(fadeEffect);
        el.remove();
      }
    }, 200);
  }

  setTimeout(function () {
    // $("#page-loader").addClass("hide-this").fadeOut(1000, function() { $(this).remove();});
    var loaderElement = document.getElementById('page-loader');
    if (loaderElement) {
      if (loaderElement.classList) {
        loaderElement.classList.add('hide-this');
      }
      fadeOutAndRemove(loaderElement);
    }
  }, 300);
  
  console.log("\n\t Make it work, make it right, make it fast.\n\n \t\t\t\t\t\t\t\t\t\t\t Kent Beck \n\n");
})();
