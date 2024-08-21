import React, {useState} from 'react'
import './App.css'

function App() {  
  // Definir el estado para almacenar el término de búsqueda
  const [consulta, setConsulta] = useState('');
  const [peliculas, setPeliculas] = useState([]);

  const API_KEY = '1e8ca98c';

  // Función para manejar el evento de cambio en el input
  const manejarCambio = (e) => {
    setConsulta(e.target.value);  // Actualizar el estado con el valor del input
  };

  // funcion para manejar el envio del formulario
  const buscarPeliculas = async (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario 
                        // para evitar que la pagina se recargue
    if (consulta.trim() === '') return;  // Verifica que el input no esté vacío
  
    const URL = `http://www.omdbapi.com/?s=${consulta}&apikey=${API_KEY}`;
  
    try {
      const respuesta = await fetch(URL);
      const datos = await respuesta.json();
      if (datos.Search) {
        setPeliculas(datos.Search);   // Actualiza el estado con los resultados
      } else {
        setPeliculas([]);  // Limpia los resultados si no hay coincidencias
      }
    } catch (error) {
      console.error('Error al buscar una pelicula:', error);
    }
  };

  return (    
    <div>
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className='form' onSubmit={buscarPeliculas}>
          <input
            type='text'
            placeholder='Escribe el nombre de la pelicula...'
            value={consulta}   // El valor del input o campo de texto está ligado al estado "consulta"
            onChange={manejarCambio}  // Manejar los cambios en el input
          />
        <button type='submit'>Buscar</button>
        </form>        
      </header>
      <main>
        {peliculas.length > 0 ? (
          <ul>
            {peliculas.map((pelicula) => (
              <li key={pelicula.imdbID}>
                <h2>{pelicula.Title}</h2>
                <p>{pelicula.Year}</p>
                <img src={pelicula.Poster} alt={pelicula.Title} />
              </li>
            ))}
          </ul>
        ) : (
          <p>No se encontraron resultados.</p>
        )}
      </main>
    </div>    
  );
}

export default App
