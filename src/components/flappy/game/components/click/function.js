export const clickOnStart = (event, setValue) => {
  if (
    event.offsetY >= 340 &&
    event.offsetY < 380 &&
    event.offsetX > 40 &&
    event.offsetX < 140
  ) {
    setValue((prev) => ({
      ...prev,
      start: true,
      posYBird: 170,
    }));
  }
};

export const clickOnRules = (event, setValue) => {
  if (
    event.offsetY >= 340 &&
    event.offsetY < 380 &&
    event.offsetX > 180 &&
    event.offsetX < 280
  ) {
    setValue((prev) => ({
      ...prev,
      page: "rules",
      posYBird: 170,
    }));
  }
};
