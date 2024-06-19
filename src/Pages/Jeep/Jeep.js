import React from 'react'
import Carousel from '../../components/Carousel';
import jeep from '../../img/jeep/jeep.jpg'
import jeep3 from '../../img/jeep/jeep3.jpg'
import jeep4 from '../../img/jeep/jeep4.jpg'
import jeep5 from '../../img/jeep/jeep5.jpg'

const images3= [
  jeep3,
  jeep4,
  jeep5
]

const Jeep = () => {
  return (
    <div>
          {/* Start of Jeep */}
     <div class="card">
        <div class="tools">
        <h1 className='pt-sans-bold-italic' style={{fontSize: '60px',marginTop: '10px', position: 'absolute'}}> Jeep</h1> 
        <img src={jeep} width={'100%'} alt='jeep'/> 
        </div>
     </div>
     <div class="card">
     <div class="spacing">
     <Carousel images={images3}/>
     </div>
     </div>
    </div>
  )
}

export default Jeep