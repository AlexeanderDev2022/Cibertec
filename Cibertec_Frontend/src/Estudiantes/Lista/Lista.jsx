import './listas.css';
import React, { useEffect, useState } from "react";
import Loanding from '../../Loandig/Loanding';

const Lista = () => {
  const [estudiantes, setEstudiantes] = useState(null); // Puede ser null, string o array
  const [alerta, setAlerta] = useState(null);

  useEffect(() => {
    fetch("http://Localhost:8000/estudiante")
      .then(response => response.json())
      .then(data => {
        setTimeout(() => {
          setEstudiantes(data.data)
        }, 4000);
      })
      .catch((e) => setAlerta("Error al conectar con el servidor."));
  }, []);

  return (<>
  <title>Cibertec || Lista</title>
    <div className='lista'>

      
      {estudiantes === 'No hay Estudantes registrados' ? (
        
        <h2>{estudiantes}</h2>
      ) : Array.isArray(estudiantes) ? (
        <>
        <h1>Lista de Estudiantes</h1>
        <table border="1" cellPadding="8" cellSpacing="0">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th> 
              <th>Apellido</th>
              <th>DNI</th>
              <th>Correo</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {estudiantes.map((estudiante, index) => (
              <tr key={index}>
                <td>{estudiante.id_estudiante}</td>
                <td>{estudiante.nombre}</td>
                <td>{estudiante.apellido}</td>
                <td>{estudiante.dni}</td>
                <td>{estudiante.email}</td>
                <td>{estudiante.estado}</td>
              </tr>
            ))}
          </tbody>
        </table></>
      ) : <Loanding></Loanding>}
    </div>
    
    </>
  );
};

export default Lista;
