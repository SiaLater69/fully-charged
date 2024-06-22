import React from 'react'
import Carousel from '../../components/Carousel'
import frontTesla from '../../img/tesla/frontTesla.webp'
import interior from '../../img/tesla/interior.avif'
import backTesla from '../../img/tesla/tesla5.webp'
import tesla1 from '../../img/tesla/tesla1.png'
import tesla2 from '../../img/tesla/tesla2.png'
import tesla3 from '../../img/tesla/tesla3.png'
import tesla4 from '../../img/tesla/tesla4.png'


const images = [
    tesla1,
    tesla2,
    tesla3,
    tesla4
  ];
  

function Tesla() {
  return (
    <div>
        {/* Tesla Starts */}
    <div class="card">
    <div class="circle">
    <svg  viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7M308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7">
      </path>
    </svg>
    </div>
    
    <h1 className='bold1'>MODEL S</h1>
            <Carousel images={images}/>
      </div>
{/* second image */}
    <div class="card">
      <div class="card__content">
      <div><img src={interior} width={'100%'} height={'650px'}  alt='Tesla interior'/></div>  
      </div>
    </div>
{/* first left right split */}
<div className="container">
      <div className="left-side">
        <p className='text2'>Dual Motor All-Wheel Drive unlocks more range than any other vehicle in our current lineup, with insane power and maximum control.</p>
        <h1 className='pt-sans-bold-italic'>3.1s</h1>
        <p className='text2'>0 - 60 mph with Launch Control</p>
        <h1 className='pt-sans-bold-italic'>300 kW / 670hp</h1>
        <p className='text2'>Peak</p>
        <h1 className='pt-sans-bold-italic'>402mi</h1>
        <p className='text2'>Range (EPA)</p>
      </div>
      <div className="right-side">
      <img src={frontTesla} alt='Tesla front'/>
      </div>
    </div>

    {/* Second left right split */}
<div className="container">
      <div className="left-side">
      <h1 className='pt-sans-bold-italic'>Tesla Model S</h1>
        <p className='text2'>This is the future we were promised – a car with sentience, a sense of humour, and a fresh take on the old norms. After trying this, your old repmobile will just feel a bit dull. The Model S has been in production since mid-2017, but even heading into old age, nothing on the market has yet managed to beat it on all fronts. While not without flaws, it is quite simply one of the most interesting, compelling cars in the world right now. We might even look back on it as the car that changed the way we all drive.</p>
        <a href="https://www.topgear.com/car-reviews/tesla/model-s" className='text'>Read the full Tesla Model S review</a>
      </div>
      <div className="right-side2">
      <img src={backTesla} alt='porsche'/>
      </div>
    </div>
<br/>
    {/* Tesla ends */}
    </div>
  )
}

export default Tesla