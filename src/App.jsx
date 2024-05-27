import styles from "./App.module.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { Detalles } from "./Paginas/Detalles";
import { LandingPage } from "./Paginas/LandingPage";
import { Favoritas } from "./Paginas/Favoritas";
import { Usuarios } from "./Paginas/Usuarios";
import { Header } from "./Componentes/Header";

export function App() {
  return (
    <Router>
      <header>
      <Header />
      <main className={styles.mainContent}>
      <Link to="/">
          <h1 className={styles.title}>Peliculas</h1>
        </Link>
        <Routes>
          <Route path="/movies/:movieId" element={<Detalles />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/favoritas" element={<Favoritas />} />
          <Route path="/usuario" element={<Usuarios />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </main>
      </header>
    </Router>
  );
}