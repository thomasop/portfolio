export const drawBackground = async (ctx, theme) => {
  const drawImage = async () => {
    const background = await loadImage(
      theme === "light"
        ? "./assets/flappy/sky.png"
        : "./assets/flappy/night.png"
    );
    ctx.drawImage(background, 0, 0, 320, 400);
  };
  await drawImage();
};

export const drawLand = async (ctx, posXLand) => {
  const drawImage = async () => {
    const land = await loadImage("./assets/flappy/land.png");
    ctx.drawImage(land, posXLand, 400, 500, 100);
  };
  await drawImage();
};

export const drawFlappyMenu = async (ctx, img, posYBird) => {
  const drawImage = async () => {
    const flappy = await loadImage(img);
    ctx.drawImage(flappy, 140, posYBird, 35, 30);
  };
  await drawImage();
};
export const drawStart = async (ctx) => {
  const drawImage = async () => {
    const start = await loadImage("./assets/flappy/start.png");
    ctx.drawImage(start, 40, 340, 100, 40);
  };
  await drawImage();
};
export const drawTitle = async (ctx) => {
  const drawImage = async () => {
    const title = await loadImage("./assets/flappy/flappy.png");
    ctx.drawImage(title, 60, 80, 200, 60);
  };
  await drawImage();
};

export const drawRules = async (ctx) => {
  const drawImage = async () => {
    const rules = await loadImage("./assets/flappy/rules.png");
    ctx.drawImage(rules, 180, 340, 100, 40);
  };
  await drawImage();
};

export const drawPipe = async (ctx, x, y, image) => {
  const drawImage = async () => {
    const img = await loadImage("./assets/flappy/" + image);
    ctx.drawImage(img, x, y, 40, 400);
  };
  await drawImage();
};

export const drawElement = async (ctx, img, x, y, width, height) => {
  const drawImage = async () => {
    const over = await loadImage("./assets/flappy/" + img + ".png");
    console.log(over);
    ctx.drawImage(over, x, y, width, height);
  };
  await drawImage();
};

const loadImage = (src) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(img);
  });
};
