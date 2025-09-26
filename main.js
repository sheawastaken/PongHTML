if (typeof window !== "undefined") {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    let lx = 130;
    let ly = 290;
    let rx = 1120;
    let ry = 290;

     const speed = 5;
     const keys = {};

    window.addEventListener("keydown", (e) => {
        keys[e.key] = true;
    });

  window.addEventListener("keyup", (e) => {
    keys[e.key] = false;
  });

    function update() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); 
        
        if (keys["w"]) ly -= speed;
        if (keys["s"]) ly += speed;
        if (keys["ArrowUp"]) ry -= speed;
        if (keys["ArrowDown"]) ry += speed;

        ctx.fillStyle = "white";

        ctx.fillRect(lx, ly, 30, 140);  //Left Paddle
        ctx.fillRect(rx, ry, 30, 140); //Right Paddle
        requestAnimationFrame(update);
    }

    update();
}
