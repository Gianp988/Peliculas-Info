import placeholder from "../MarcadorIMG.jpg";

export function PeliculasIMG(path, width) {
  return path ? `https://image.tmdb.org/t/p/w${width}${path}` : placeholder;
}