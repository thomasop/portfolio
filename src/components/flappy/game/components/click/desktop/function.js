export const clickOnStartDesktop = (event, setValue) => {
  if (
    event.offsetY >= 340 &&
    event.offsetY < 380 &&
    event.offsetX > 60 &&
    event.offsetX < 160
  ) {
    setValue((prev) => ({
      ...prev,
      start: true,
      posYBird: 170,
    }));
  }
};

export const clickOnPauseDesktop = (event, setValue) => {
  if (
    event.offsetY >= 20 &&
    event.offsetY < 20 + 35 &&
    event.offsetX > 265 &&
    event.offsetX < 300
  ) {
    setValue((prev) => ({
      ...prev,
      pause: false,
    }));
  }
};

export const clickOnRestartDesktop = (event, setValue) => {
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
