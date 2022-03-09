import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';


import ImgGifs from './ImgGifs';

const LinkGifs = ({n}) => {
    /* const [gifs, setgifs] = useState([]) */
    const {data:gifs,loading}=useFetchGifs(n) ;
    console.log(gifs);
    console.log(loading);
    

   /*  useEffect(() => {
        gif(n)
            .then((f)=>setgifs(f));
    }, [n]) */
    
    
  return (
    <>
        <h1>{n}</h1>
        <h2>{loading?'':'cargando......'}</h2>
        <ol className='padre_gifs'>
            {
                gifs.map((g)=>(
                    <ImgGifs 
                    key={g.id}
                    {...g}
                    />
                ))
            }
        </ol>
    </>
  )
}

export default LinkGifs