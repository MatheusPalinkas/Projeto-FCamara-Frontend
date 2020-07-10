const isImgValid = (url) => {
  const img = new Image();
  img.src = url;
  if (img.src === window.location.href) return null;

  return url;
};

export default isImgValid;
