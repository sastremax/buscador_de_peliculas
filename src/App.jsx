import React, {useState} from 'react'
import './App.css'

function App() {  
  // Definir el estado para almacenar el término de búsqueda
  const [consulta, setConsulta] = useState('');

  // Función para manejar el evento de cambio en el input
  const manejarCambio = (e) => {
    setConsulta(e.target.value);  // Actualizar el estado con el valor del input
  };

  // funcion para manejar el envio del formulario
  const buscarPeliculas = (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario 
                        // para evitar que la pagina se recargue
    console.log(`Buscando peliculas con el termino: ${consulta}`);
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
        aqui irá el resultado
      </main>
    </div>    
  );
}

export default App
