$(document).ready(function () {

  var meowSound = new Audio("sounds/meow1.mp3");

  $(".special-link").click(function () {

    meowSound.currentTime = 0;
    meowSound.play();

    $("#lucypet").fadeOut("fast");

    setTimeout(function () {
      $("#lucypet").attr("src", "images/IMG_7467.jpg");
      $("#lucypet").fadeIn("fast");
    }, 200);

    setTimeout(function () {
      $("#lucypet").fadeOut("fast");

      setTimeout(function () {
        $("#lucypet").attr("src", "images/IMG_6771.jpg");
        $("#lucypet").fadeIn("fast");
      }, 200);

    }, 1500);

  });

});

