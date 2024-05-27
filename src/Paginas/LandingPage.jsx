import { useSearchParams } from "react-router-dom";
import { MoviesGrid } from "../Componentes/MoviesGrid";
import { Search } from "../Componentes/Search";
import { UsarValidacion } from "../hooks/UsarValidacion";

export function LandingPage() {
  const [query] = useSearchParams();
  const search = query.get("search");

  const debouncedSearch = UsarValidacion(search, 300);
  return (
    <div>
      <Search />
      <MoviesGrid key={debouncedSearch} search={debouncedSearch} />
    </div>
  );
}
