import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Spinner } from "../Componentes/Spinner";
import { PeliculasIMG } from "../Utilidades/PeliculasIMG"
import { get } from "../Utilidades/httpsReferencias";
import styles from "./Detalles.module.css";
import React from 'react';


export function Detalles(){
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        setIsLoading(true);
    
        get("/movie/" + movieId).then((data) => {
          setMovie(data);
          setIsLoading(false);
        });
    }, [movieId]);

      if (isLoading) {
        return <Spinner />;
      }
      const imageUrl = PeliculasIMG (movie.poster_path, 500);
      return(
        <div className={styles.detailsContainer}>
            <img
                className={`${styles.col} ${styles.movieImage}`}
                src={imageUrl}
                alt={movie.title}
            />
            <div className={`${styles.col} ${styles.movieDetails}`}>
                <p className={styles.firstItem}>
                <strong>Titulo:</strong> {movie.title}
                </p>
                <p>
                <strong>Genero:</strong>{" "}
                {movie.genres.map((genre) => genre.name).join(", ")}
                </p>
                <p>
                <strong>Descripción:</strong> {movie.overview}
                </p>
            </div>
        </div>
      )
}