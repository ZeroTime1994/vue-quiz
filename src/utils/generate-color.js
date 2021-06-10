const randomColor = () => {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
  );
};

const generateUniqueRandomColor = (excludeColor = []) => {
  const generatedColor = randomColor();
  let isUnique = true;

  excludeColor.forEach((color) => {
    if (color === generatedColor) {
      isUnique = false;
      return;
    }
  });
  if (!isUnique) {
    generateUniqueRandomColor();
  } else {
    return generatedColor;
  }

  return generateUniqueRandomColor(excludeColor);
};

export default generateUniqueRandomColor;
