import React from 'react'
import { useState } from 'react'

const CardCapres = (props) => {
    const [nomor, setNomor]=useState(0);

    const btn =()=>{
        setNomor(nomor+1);
    }

  return (
    <div className='card'>
        <img src={props.image} alt={props.imageAlt} style={{width:"100%"}}/>
        <h2>{props.name}</h2>
        <h1>{props.no}</h1>
        <p>{props.partai}</p>
        <h2>{nomor}</h2>
        <button onClick={btn}>Vote</button>
    </div>
  )
}

export default CardCapres;