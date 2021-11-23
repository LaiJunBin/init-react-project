export const cleanUrl = (url) =>
  '/' +
  url
    .split('/')
    .filter((x) => x)
    .join('/')
