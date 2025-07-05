import { useState } from "react";
import './Formulario.css';

function RegistroEstudiantes() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");
  const [estado, setEstado] = useState("Activo");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const estudiante = {
      nombre,
      apellido,
      dni: parseInt(dni),
      email,
      estado,
    };

    const datos = { estudiante };

    try {
      const respuesta = await fetch("http://localhost:8000/estudiante", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      });

      const resultado = await respuesta.json();
      console.log("Respuesta del servidor:", resultado);
    Swal.fire({
  title: "Good job!",
  html:`Registrado compruebelo en <a href='/lista'>Aqui</a>`,
  icon: "success"
});

    } catch (error) {
      console.error("❌ Error al registrar:", error);
      alert("Error al registrar estudiante");
    }
  };

  return (
    <div>
      <title>Cibertec || Registrar estudiante</title>
      <form onSubmit={handleSubmit} >
        <h2 className="sub-title">Registrar estudiante</h2>

        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
          autoComplete="off"
        /><br />

        <input
          type="text"
          placeholder="Apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          required
          autoComplete="off"
        /><br />

        <input
          type="text"
          placeholder="DNI"
          value={dni}
          maxLength={8}
          onChange={(e) => setDni(e.target.value)}
          required
          autoComplete="off"
        /><br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="off"
        /><br />

        <select
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
          required
          autoComplete="off"
        >
          <option value="Activo">Activo</option>
          <option value="Inactivo">Inactivo</option>
          <option value="Egresado">Egresado</option>
          <option value="Suspendido">Suspendido</option>
          <option value="Retirado">Retirado</option>
        </select><br /><br />

        <button type="submit">Registrar estudiante</button>
      </form>
    </div>
  );
}

export default RegistroEstudiantes;
