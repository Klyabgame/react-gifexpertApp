import React, { useState } from 'react'

const Input = ({setnombre}) => {
    const [input, setinput] = useState('')
    const handleChange=(c)=>{
        setinput(c.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setnombre((n)=>[input,...n]);
        setinput('');

    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <input className='input' value={input} onChange={handleChange} placeholder='Escribe el nombre de tu GIF'/>
        </form>
    </>
  )
}

export default Input