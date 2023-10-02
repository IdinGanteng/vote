import React from 'react'
import gambar from '../assets/idin.jpeg'
import Button from './Button'
import anis from '../assets/anis.jpeg'
import ganjar from '../assets/ganjar.jpeg'
import prabowo from '../assets/prabowo.jpeg'

const Card = () => {
  return (
    <div>
        <div className='card'>
            <img src={ganjar} alt="gambar" style={{width:'100%'}}/>
            <div className='container'>
                <h2>Ganjar Pranowo</h2>
                <h1>1</h1>
                <p>Partai PDIP</p>
                <h2><a id='clicks1'>0</a></h2>
                <button>Vote</button>
            </div>
        </div>
        <div className='card'>
            <img src={anis} alt="gambar" style={{width:'100%'}}/>
            <div className='container'>
                <h2>Anis Baswedan</h2>
                <h1>2</h1>
                <p>Partai NasDem</p>
                <h2><a id='clicks2'>0</a></h2>
                <Button/>
            </div>
        </div>
        <div className='card'>
            <div className='img'>
            <img src={prabowo} alt="gambar" style={{width:'100%'}}/>
            </div>
            <div className='container'>
                <h2>Prabowo Subianto</h2>
                <h1>3</h1>
                <p>Partai Gerindra</p>
                <h2><a id='clicks3'>0</a></h2>
                <Button/>
            </div>
        </div>
    </div>
  )
}

export default Card