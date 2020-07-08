const isImgValid = (url) => {
  const img = new Image();
  img.src = url;
  if (img.height > 0) return url;

  return null;
};

export default isImgValid;
