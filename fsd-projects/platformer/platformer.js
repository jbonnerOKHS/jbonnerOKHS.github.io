$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
   //toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(450, 657, 220, 20,"aqua");
    createPlatform(400, 542, 180, 20, "aqua");
    createPlatform(663, 510, 152, 16, "aqua");
    createPlatform(850, 400, 96, 82, "aqua");
    createPlatform(990, 320, 80, 113, "aqua");
    createPlatform(1130, 215, 110, 57,"aqua");
    createPlatform(1300, 615, 82, 30, "aqua");
    createPlatform(150, 215, 27, 425, "aqua");
    createPlatform(175, 473, 59, 23, "aqua");
    createPlatform(175, 615, 62, 15, "aqua");
    // TODO 3 - Create Collectables
    createCollectable("star", 387, 452, 0, 0.7);
    createCollectable("star", 700, 277, 1.3, 0.7);
    createCollectable("star", 1293, 97, 1.5, 0.7);
    createCollectable("star", 1350, 125, 0);
    createCollectable("star", 200, 500, 1.9, 1.0);
    createCollectable("star", 200, 430, 1.9, 1.0);
   

    // TODO 4 - Create Cannons
    createCannon("bottom", 705, 3000);
    createCannon("top", 1013,2075);
    createCannon("right", 482, 3050);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
