
$(".Likebutton").click(function () {
  var sound = new Audio("sounds/purr.mp3");
  sound.play();

  var originalText = $(this).text();
  $(this).text("LUCY FEELS LOVED 🐾");

  spawnHearts();

  setTimeout(function () {
    sound.pause();
    sound.currentTime = 0;
    $(".Likebutton").text(originalText);
  }, 6500);
});


$(".action-img").each(function () {
  var original = this.src;
  var hover = $(this).attr("data-hover");

  $(this).hover(
    function () {
      this.src = hover;
    },
    function () {
      this.src = original;
    }
  );
});


function dragElement(item) {

  let pos1 = 0;
  let pos2 = 0;
  let pos3 = 0;
  let pos4 = 0;

  item.onpointerdown = pointerDrag;

  function pointerDrag(e) {
    e.preventDefault();

    pos3 = e.clientX;
    pos4 = e.clientY;

    item.style.position = "absolute";
    item.style.zIndex = "1000";

    document.onpointermove = elementDrag;
    document.onpointerup = stopElementDrag;
  }

  function elementDrag(e) {
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;

    pos3 = e.clientX;
    pos4 = e.clientY;

    item.style.top = (item.offsetTop - pos2) + "px";
    item.style.left = (item.offsetLeft - pos1) + "px";
  }

  function stopElementDrag() {
    document.onpointerup = null;
    document.onpointermove = null;
  }
}

dragElement(document.getElementById("item1"));
dragElement(document.getElementById("item2"));
dragElement(document.getElementById("item3"));
dragElement(document.getElementById("item4"));
dragElement(document.getElementById("item5"));
dragElement(document.getElementById("item6"));