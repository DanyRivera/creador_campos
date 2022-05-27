import { useState } from 'react';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const [campo, setCampo] = useState('');

  return <Component {...pageProps} 
    campo={campo}
    setCampo={setCampo}
  />
}

export default MyApp
