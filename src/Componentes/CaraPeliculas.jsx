import { Link } from "react-router-dom";
import styles from "./CaraPeliculas.module.css";
import { PeliculasIMG } from "../Utilidades/PeliculasIMG";

export function CaraPeliculas({ movie }) {
  const imageUrl = PeliculasIMG(movie.poster_path, 300);
  return (
    <li className={styles.CaraPeliculas}>
      <Link to={"/movies/" + movie.id}>
        <img
          width={230}
          height={345}
          className={styles.movieImage}
          src={imageUrl}
          alt={movie.title}
        />
        <div>{movie.title}</div>
      </Link>
    </li>
  );
}
