import React from 'react'

const ImgGifs = ({id,title,url}) => {
    console.log({id,title,url});
  return (
    <>
        <div className='gifs'>
            <img  className='gifs__img' src={url} alt={title}/>
            <h1 className='gifs__titulo'>{title}</h1>
        </div>
    </>
  )
}

export default ImgGifs