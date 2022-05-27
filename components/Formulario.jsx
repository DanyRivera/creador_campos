import { useEffect, useState } from "react";
import ListadoCampos from "./ListadoCampos";
import data from "../campos.json";

const Formulario = ({ campo }) => {

  const [campos, setCampos] = useState([]);

  useEffect(() => {

    if (campo) {
      const campoSelec = data.find(item => item.name === campo);

      if (!campos.includes(campoSelec)) {
        setCampos([...campos, campoSelec]);
      }

    };

  }, [campo])

  return (
    <>
      <h1 className="title">Your Form</h1>

      <ListadoCampos
        campos={campos}
      />

    </>
  )
}

export default Formulario