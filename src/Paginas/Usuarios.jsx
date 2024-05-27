import React, { useState } from 'react';
import styles from './Usuarios.module.css';

export function Usuarios() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    apellidos: '',
    nombre: '',
    correo: '',
    celular: '',
    edad: '',
    genero: 'Masculino',
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      // Edit user
      const updatedUsers = [...users];
      updatedUsers[editIndex] = formData;
      setUsers(updatedUsers);
      setEditIndex(null);
    } else {
      // Add new user
      setUsers([...users, formData]);
    }
    setFormData({
      apellidos: '',
      nombre: '',
      correo: '',
      celular: '',
      edad: '',
      genero: 'Masculino',
    });
  };

  const handleEdit = (index) => {
    setFormData(users[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  return (
    <div className={styles.container}>
      <h1>Formulario para Usuarios</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="hidden" name="userId" value={editIndex !== null ? users[editIndex].id : ''} />
        <label for="apellidos">Apellidos:</label>
        <input type="text" name="apellidos" value={formData.apellidos} onChange={handleChange} required />
        <label for="nombre">Nombre:</label>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
        <label for="correo">Correo:</label>
        <input type="email" name="correo" value={formData.correo} onChange={handleChange} required />
        <label for="celular">Celular:</label>
        <input type="tel" name="celular" value={formData.celular} onChange={handleChange} required />
        <label for="edad">Edad:</label>
        <input type="number" name="edad" value={formData.edad} onChange={handleChange} required />
        <label for="genero">Género:</label>
        <select name="genero" value={formData.genero} onChange={handleChange} required>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
        </select>
        <button type="submit">{editIndex !== null ? 'Editar' : 'Guardar'}</button>
        <button type="button" onClick={() => setFormData({ apellidos: '', nombre: '', correo: '', celular: '', edad: '', genero: 'Masculino' })}>
          Limpiar campos
        </button>
      </form>
      <div className={styles.listContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Apellidos</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Celular</th>
              <th>Edad</th>
              <th>Género</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.apellidos}</td>
                <td>{user.nombre}</td>
                <td>{user.correo}</td>
                <td>{user.celular}</td>
                <td>{user.edad}</td>
                <td>{user.genero}</td>
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
