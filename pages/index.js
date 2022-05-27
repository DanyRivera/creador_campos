import Formulario from '../components/Formulario'
import AgregarCampo from '../components/AgregarCampo'
import styles from '../styles/Home.module.css'

export default function Home({ setCampo, campo }) {

  return (
    <div className={styles.home}>
      <div className={styles.seccion1}>
        <AgregarCampo
          setCampo={setCampo}
        />
      </div>
      <div>
        <Formulario
          campo={campo}
        />
      </div>
    </div>
  )
}
