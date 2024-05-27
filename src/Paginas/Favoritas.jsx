import React, { useState } from 'react';
import styles from './Favoritas.module.css';

export function Favoritas() {
  const [movies, setMovies] = useState([]);
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      // Edit movie
      const updatedMovies = [...movies];
      updatedMovies[editIndex] = { name, review };
      setMovies(updatedMovies);
      setEditIndex(null);
    } else {
      // Add new movie
      setMovies([...movies, { name, review }]);
    }
    setName('');
    setReview('');
  };

  const handleEdit = (index) => {
    setName(movies[index].name);
    setReview(movies[index].review);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedMovies = movies.filter((_, i) => i !== index);
    setMovies(updatedMovies);
  };

  return (
    <div className={styles.container}>
      <h1>Películas Favoritas</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Nombre de la película"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Reseña"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          required
        ></textarea>
        <button type="submit">{editIndex !== null ? 'Editar' : 'Guardar'}</button>
        <button type="button" onClick={() => { setName(''); setReview(''); setEditIndex(null); }}>
          Limpiar campos
        </button>
      </form>
      <div className={styles.listContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Reseña</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr key={index}>
                <td>{movie.name}</td>
                <td>{movie.review}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Editar</button>
                  <button onClick={() => handleDelete(index)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
