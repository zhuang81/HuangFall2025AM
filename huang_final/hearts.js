
let hearts = [];

function setup() {
  let c = createCanvas(windowWidth, windowHeight);
  c.position(0, 0);
  c.style("pointer-events", "none");
  clear();
}

function draw() {
  clear();


  for (let heart of hearts) {
    heart.update();
    heart.display();
  }


  for (let i = hearts.length - 1; i >= 0; i--) {
    if (hearts[i].alpha <= 0) {
      hearts.splice(i, 1);
    }
  }
}


class Heart {
  constructor() {
    this.x = random(width);
    this.y = height - 40;
    this.speed = random(1, 3);
    this.alpha = 255;
  }

  update() {
    this.y -= this.speed;
    this.alpha -= 1;
  }

  display() {
    fill(215, 240, 185, this.alpha);
    noStroke();
    textSize(100);
    text("❤", this.x, this.y);
  }
}

function spawnHearts() {
  for (let i = 0; i < 15; i++) {
    hearts.push(new Heart());
  }
}

