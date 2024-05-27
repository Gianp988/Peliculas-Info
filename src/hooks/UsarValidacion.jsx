import { useEffect, useState } from "react";

export function UsarValidacion(value, delay) {
    // Estado y setters para el valor debounced
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(
      () => {
        // Actualizar el valor debitado después del retardo
        const handler = setTimeout(() => {
          setDebouncedValue(value);
        }, delay);

        return () => {
          clearTimeout(handler);
        };
      },
      [value, delay] // Sólo vuelve a tener efecto si cambia el valor o el retardo
    );
    return debouncedValue;
  }
  