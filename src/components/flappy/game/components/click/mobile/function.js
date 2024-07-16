export const clickOnStartMobile = (event, setValue) => {
  if (
    event.offsetY >= 340 &&
    event.offsetY < 380 &&
    event.offsetX > 40 &&
    event.offsetX < 140
  ) {
    //setStart(true);
    setValue((prev) => ({
      ...prev,
      start: true,
      posYBird: 170,
    }));
  }
};

export const clickOnRulesMobile = (event, setValue) => {
  if (
    event.offsetY >= 340 &&
    event.offsetY < 380 &&
    event.offsetX > 180 &&
    event.offsetX < 280
  ) {
    //setStart(true);
    setValue((prev) => ({
      ...prev,
      rules: true,
      posYBird: 170,
    }));
  }
};

export const clickOnPauseMobile = (event, setValue) => {
  if (
    event.offsetY >= 20 &&
    event.offsetY < 55 &&
    event.offsetX > 265 &&
    event.offsetX < 300
  ) {
    setValue((prev) => ({
      ...prev,
      pause: false,
    }));
  }
};

export const clickOnRestartMobile = (event, setValue) => {
  if (
    event.offsetY >= 430 &&
    event.offsetY < 470 &&
    event.offsetX > 60 &&
    event.offsetX < 150
  ) {
    setValue((prev) => ({
      ...prev,
      posXLand: 0,
      birdFlyRatio: 0,
      posYBird: 170,
      posXBird: 140,
      start: false,
      dyBird: 0,
      dxBird: 0,
      animateBeforeGameOver: false,
      score: 0,
      userTapOnScreen: false,
      currentPipe: 0,
      rotate: 0,
      gameOver: false,
      posXPipe: 400,
      maxXPipe: 400 + 400,
      birdImg: "./assets/flappy/bird-1.png",
      pipe: [
        [
          { x: 400, y: 325, type: "up" },
          { x: 400, y: -225, type: "down" },
        ],
        [
          { x: 400 + 200, y: 225, type: "up" },
          { x: 400 + 200, y: -325, type: "down" },
        ],
        [
          { x: 400 + 400, y: 325, type: "up" },
          { x: 400 + 400, y: -225, type: "down" },
        ],
      ],
    }));
  }
};
