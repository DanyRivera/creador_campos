import styles from '../styles/Home.module.css';

const ListadoCampos = ({ campos }) => {

    return (
        <div className={styles.contenido}>
            {campos.map(campo => (

                <>

                    {campo.name == "name" && (
                        <div
                            className={styles.campo}
                            key={campo.id}
                        >
                            <label>{campo.label}:</label>
                            <input type={campo.type} placeholder="Your Name" />
                        </div>
                    )}

                    {campo.name == "email" && (
                        <div
                            className={styles.campo}
                            key={campo.id}
                        >
                            <label>{campo.label}:</label>
                            <input type={campo.type} placeholder="Your Email" />
                        </div>
                    )}

                    {campo.name == "age" && (
                        <div
                            className={styles.campo}
                            key={campo.id}
                        >
                            <label>{campo.label}:</label>

                            <select name={campo.name}>
                                {campo.options.map(option => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </select>
                        </div>
                    )}

                    {campo.name == "country" && (

                        <fieldset
                            className={styles.seccionPaises}
                            key={campo.id}
                        >
                            <legend>Select Your Country</legend>

                            <div
                                className={styles.paises}
                            >
                                {campo.options.map(option => (
                                    <div key={option}>
                                        <input type={campo.type} />
                                        <label>{option}</label>
                                    </div>
                                ))}
                            </div>

                        </fieldset>

                    )}


                </>


            ))}
        </div>
    )
}

export default ListadoCampos