export const drawBackgroundDesktop = async (ctx, theme) => {
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

export const drawOverDesktop = async (ctx) => {
  const drawImage = async () => {
    const over = await loadImage("./assets/flappy/gameover.png");
    ctx.drawImage(over, 60, 80, 200, 60);
  };
  await drawImage();
};

export const drawOkDesktop = async (ctx) => {
  const drawImage = async () => {
    const ok = await loadImage("./assets/flappy/ok.png");
    ctx.drawImage(ok, 60, 430, 90, 40);
  };
  await drawImage();
};

export const drawScoreBoardDesktop = async (ctx) => {
  const drawImage = async () => {
    const scoreboard = await loadImage("./assets/flappy/scoreboard.png");
    ctx.drawImage(scoreboard, 20, 170, 280, 140);
  };
  await drawImage();
};

export const drawPipeDesktop = async (ctx, x, y, image) => {
  const drawImage = async () => {
    const img = await loadImage("./assets/flappy/" + image);
    ctx.drawImage(img, x, y, 40, 400);
  };
  await drawImage();
};

export const drawLandDesktop = async (ctx, posXLand) => {
  const drawImage = async () => {
    const land = await loadImage("./assets/flappy/land.png");
    ctx.drawImage(land, posXLand, 400, 500, 100);
  };
  await drawImage();
};

export const drawFlappyDesktop = async (
  ctx,
  img,
  posYBird,
  posXBird,
  rotate,
  degree
) => {
  const drawImage = async () => {
    const flappy = await loadImage(img);
    if (rotate === 0) {
      ctx.drawImage(flappy, posXBird, posYBird, 35, 30);
    } else {
      ctx.save();
      ctx.translate(posXBird + 17.5, posYBird + 15);
      ctx.rotate((degree * Math.PI) / 180);
      ctx.translate(-(posXBird + 17.5), -(posYBird + 15));
      ctx.drawImage(flappy, posXBird, posYBird, 35, 30);
      ctx.restore();
    }
  };
  await drawImage();
};

export const drawBestScoreDesktop = async (ctx, bestScore) => {
  const drawImage = async () => {
    if (bestScore > 9) {
      let start = 305;
      let strScore = bestScore
        .toString()
        .split("")
        .reverse()
        .map((Number, index) => async () => {
          const score = await loadImage(`./assets/flappy/${Number}.png`);
          ctx.drawImage(score, start - index * 30, 260, 25, 25);
        });
    } else {
      const score = await loadImage(`./assets/flappy/${bestScore}.png`);
      ctx.drawImage(score, 250, 260, 25, 25);
    }
  };
  await drawImage();
};

export const drawCurrentScoreDesktop = async (ctx, score) => {
  const drawImage = async () => {
    if (score > 9) {
      let start = 0;
      let strScore = score
        .toString()
        .split("")
        .map((Number, index) => async () => {
          const score = await loadImage(`./assets/flappy/${Number}.png`);
          ctx.drawImage(score, start + (index + 1) * 20, 20, 25, 25);
        });
    } else {
      const scored = await loadImage(`./assets/flappy/${score}.png`);
      ctx.drawImage(scored, 20, 20, 25, 25);
    }
  };
  await drawImage();
};
export const drawPauseDesktop = async (ctx, pause) => {
  const drawImage = async () => {
    if (pause === false) {
      const pause = await loadImage("./assets/flappy/pause.png");
      ctx.drawImage(pause, 265, window.innerHeight / 2 - 230, 35, 35);
    } else {
      const play = await loadImage("./assets/flappy/play.png");
      ctx.drawImage(play, 265, window.innerHeight / 2 - 230, 35, 35);
    }
  };
  await drawImage();
};

export const drawMobDesktop = async (ctx, posXMob, posYMob) => {
  const drawImage = async () => {
    const mob = await loadImage("./assets/flappy/mob1.png");
    ctx.drawImage(mob, posXMob, posYMob, 40, 40);
  };
  await drawImage();
};

export const drawScoreDesktop = async (ctx, score) => {
  const drawImage = async () => {
    if (score > 9) {
      let start = 305;
      let strScore = score
        .toString()
        .split("")
        .reverse()
        .map((Number, index) => async () => {
          const score = await loadImage(`./assets/flappy/${Number}.png`);
          ctx.drawImage(score, start - index * 30, 210, 25, 25);
        });
    } else {
      const scored = await loadImage(`./assets/flappy/${score}.png`);
      ctx.drawImage(scored, 250, 210, 25, 25);
    }
  };
  await drawImage();
};

export const drawLandFixeDesktop = async (ctx) => {
  const drawImage = async () => {
    const land = await loadImage("./assets/flappy/land.png");
    ctx.drawImage(land, 0, 400, 500, 100);
  };
  await drawImage();
};
export const drawFlappyMenuDesktop = async (ctx, img, posYBird) => {
  const drawImage = async () => {
    const flappy = await loadImage(img);
    ctx.drawImage(flappy, 140, posYBird, 35, 30);
  };
  await drawImage();
};

export const drawStartDesktop = async (ctx) => {
  const drawImage = async () => {
    const start = await loadImage("./assets/flappy/start.png");
    ctx.drawImage(start, 60, 340, 100, 40);
  };
  await drawImage();
};
export const drawTitleDesktop = async (ctx) => {
  const drawImage = async () => {
    const title = await loadImage("./assets/flappy/flappy.png");
    ctx.drawImage(title, 60, 80, 200, 60);
  };
  await drawImage();
};
export const drawOutlineDesktop = (ctx, theme) => {
  ctx.beginPath();
  ctx.rect(0, 0, window.innerWidth, window.innerHeight / 2 - 250);
  ctx.fillStyle = theme === "dark" ? "#171933" : "#e8e9f8";
  ctx.fill();

  ctx.beginPath();
  ctx.rect(
    0,
    window.innerHeight / 2 + 250,
    window.innerWidth,
    window.innerHeight
  );
  ctx.fillStyle = theme === "dark" ? "#171933" : "#e8e9f8";
  ctx.fill();
};

const loadImage = (src) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(img);
  });
};
