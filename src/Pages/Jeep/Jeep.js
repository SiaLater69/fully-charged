import React from 'react'
import jeep from '../../img/jeep/jeep.jpg'
import jeep1 from '../../img/jeep/jeep1.png'
import jeep3 from '../../img/jeep/jeep3.png'
import jeep4 from '../../img/jeep/jeep4.png'
import jeep5 from '../../img/jeep/jeep5.png'
import jeep6 from '../../img/jeep/jeep6.webp'
import JeepCarousel from './JeepCarousel';

const images1= [
  jeep3,
  jeep4,
  jeep5
]

const Jeep = () => {
  return (
    <div>
          {/* Start of Jeep */}
          <div class="container">
     <div class="card">
        <div class="card__content">
        <h1 className='bold3'> Jeep</h1> 
        <img src={jeep} width={'100%'} alt='jeep'/> 
        </div>
     </div>
     <div class="card">
     <JeepCarousel images={images1}/>
     </div>
     </div>

     
    {/* first left right split */}
    <div className="container">
      <div className="left-side">
        <h1 className='pt-sans-bold-italic'>156 Horse Power</h1>
        <h1 className='pt-sans-bold-italic'>Electric range</h1>
        <p className='text2'>miles (365.4) / km(588)</p>
        <h1 className='pt-sans-bold-italic'>Transmission</h1>
        <p className='text2'>Automatic</p>
        <h1 className='pt-sans-bold-italic'>4 wheel drive</h1>
      </div>
      <div className="right-side">
      <img src={jeep1} alt='ioniq5 front'/>
      </div>
    </div>

    {/* Second left right split */}
    <div className="container">
      <div className="left-side">
        <h1 className='pt-sans-bold-italic'>Jeep Avenger</h1>
        <p className='text2'>Well, who'da thunk it? Jeep has built an excellent city car. Like any decent EV the powertrain is silent and smooth, and it qualifies for various cheap parking and congestion-zone incentives. <br/>It's small and manoeuvrable and the boxy outline helps you judge the corners. <br/>The bash-resistant exterior and speedbump-happy suspension calm your nerves.<br/>That's not all, mind. It has OK range and quick-enough rapid charging, so its long-distance compass is perfectly tolerable. The cruising manners are fine, and it’s even fairly chuckable in corners. Thank the small size and long-travel suspension.</p>
    <a className='text' href="https://www.topgear.com/car-reviews/jeep/avenger">Read the full Jeep Avenger review</a>
        </div>
        
        <div className="right-side">
        <img src={jeep6} alt='jeep'/>
        </div>
        </div>
    </div>
  )
}

export default Jeep