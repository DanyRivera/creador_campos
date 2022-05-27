import { useState } from "react";
import styles from '../styles/Home.module.css';

const AgregarCampo = ({setCampo}) => {

  const [nuevoCampo, setNuevoCampo] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setCampo(nuevoCampo)

    setTimeout(() => {
      setCampo('');
    }, 2000);
  }

  return (

    <>
      <h1 className="title">Add a new Field!</h1>

      <form
        onSubmit={handleSubmit}
      >

        <div
          onChange={e => setNuevoCampo(e.target.value)}
          className={styles.campos}
        >
          <select name="campo" >
            <option defaultValue disabled > -- Choose --</option>
            <option value="name">Field for Name</option>
            <option value="email">Field for Email</option>
            <option value="age">Field for Age</option>
            <option value="country">Field for Country</option>
          </select>
        </div>

        <div className={styles.btn}>
          <button
            type="submit"
          >
            Create Field
          </button>
        </div>

      </form>

    </>

  )
}

export default AgregarCampo