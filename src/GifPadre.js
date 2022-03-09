import React, { useState } from 'react'
import Input from './components/Input'
import LinkGifs from './components/LinkGifs';

const GifPadre = () => {
    const [nombre, setnombre] = useState(['goku']);
  return (
    <>
        <header className='cabecera'>
        <h1>GALERIA DE GIFS</h1>
        <Input  setnombre={setnombre}/>
        </header>
        <hr/>
        <ol>
            {
                nombre.map((n)=>(
                    <LinkGifs
                    key={n}
                    n={n}
                    />
                ))
            }
        </ol>

    </>
  )
}

export default GifPadre