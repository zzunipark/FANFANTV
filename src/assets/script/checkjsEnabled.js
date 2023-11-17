var jsEnabled = true;

document.addEventListener("DOMContentLoaded", function () {
  var hiddenElements = document.getElementsByClassName("js-hidden");
  if (jsEnabled) {
    for (var i = 0; i < hiddenElements.length; i++) {
      hiddenElements[i].style.display = "block";
    }
  }
});
