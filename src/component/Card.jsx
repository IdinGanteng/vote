import React from 'react'
import gambar from '../assets/idin.jpeg'
import prabowo from '../assets/prabowo.jpeg'
import CardCapres from './CardCapres'

const Card = () => {

  return (
    <div>   
       <CardCapres
       name="Prabowo Sub"
       no="3"
       partai="Gerindra"
       image={prabowo}
       imageAlt="gambar"
       />
        <CardCapres
         name="Idin"
         no="4"
         partai="puki"
         image={gambar}
         imageAlt="gambar"
        />
    </div>
  )
}

export default Card