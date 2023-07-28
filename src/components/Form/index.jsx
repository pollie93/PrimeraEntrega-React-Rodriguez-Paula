import { useState } from "react";
import Swal from "sweetalert2";
import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import "./styles.css";

const Form = ({deleteCart}) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !nombre)
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Los campos de email y nombre son requeridos",
      });

    const addRef = await addDoc(collection(db, "purchases"), {
      nombre,
      email,
    });
    Swal.fire({
      icon: "success",
      title: "Compra finalizada!",
      text: `Tu número de comprobante es: ${addRef.id}`,
    });
    deleteCart()
    setEmail("");
    setNombre("");
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <label className="label">
        Nombre:
        <input
          type="text"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
          className="input"
        />
      </label>
      <br />
      <label className="label">
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="input"
        />
      </label>
      <br />
      <button type="submit" className="button">
        Enviar
      </button>
    </form>
  );
};

export default Form;
