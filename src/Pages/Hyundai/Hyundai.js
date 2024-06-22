import hyndaiLogo from '../../img/hyundai/logo.png'
import ioniq1 from '../../img/hyundai/ioniq1.jpg'
import ioniq2 from '../../img/hyundai/ioniq2.jpg'
import ioniq3 from '../../img/hyundai/ioniq3.jpg'
import ioniq4 from '../../img/hyundai/ioniq4.jpg'
import ioniq5 from '../../img/hyundai/ioniq5.jpg'
import ioniq6 from '../../img/hyundai/ioniq6.jpg'
import React from 'react'
import Carousel from '../../components/Carousel'

const images = [
    ioniq1,
    ioniq2,
    ioniq3
  ];

const Hyundai = () => {
  return (
    <div>
            {/* Hyndai starts */}
    <div class="card">
        <div class="tools">
            <div class="circle">
            <br/>
            <img src={hyndaiLogo} alt='hyndaiLogo'/>
            </div>
          </div>
          <div class="card__content">
          {/* <h1 style={{color: 'red',fontSize: '130px',marginTop: '10px', marginLeft: '20%', position: 'absolute'}}>lorem</h1> */}
          <Carousel images={images}/>  
          </div>
      </div>
    {/* Second Image */}
      <div class="card">
      <h1 className='pt-sans-bold-italic'>Functional Aesthetics</h1>
      <h2 className='pt-sans-bold-italic'>Designed to perform</h2>
      <br/>
      <p style={{fontSize: '20px', marginLeft: '10%', marginRight: '10%', fontFamily: 'PT Sans',fontStyle: 'italic'}}>IONIQ 5 N performance-enhancing elements designed to enhance the high-performance driving experience and maximize the track driving potential of this iconic high-performance EV.</p>
        <img src={ioniq4} width={'100%'}  alt='ioniq5'/>
      </div>

    {/* first left right split */}
      <div className="container">
      <div className="left-side">
        <h1 className='pt-sans-bold-italic'>N Torque Distribution</h1>
        <h1 className='pt-sans-bold-italic'>3.4s</h1>
        <p className='text2'>0 - 100 (with N Grin Boost)</p>
        <h1 className='pt-sans-bold-italic'>650ps</h1>
        <p className='text2'>Power (with N Grin Boost)</p>
        <h1 className='pt-sans-bold-italic'>260km</h1>
        <p className='text2'>Top Speed (with N Grin Boost)</p>
      </div>
      <div className="right-side">
      <img src={ioniq5} alt='ioniq5 front'/>
      </div>
    </div>

    
    {/* Second left right split */}
<div className="container">
      <div className="left-side">
      <h1 className='pt-sans-bold-italic'>IONIQ 5 N</h1>
        <p className='text2'>Right now, the Ioniq 5 N is an electric car that's as involving as a really good petrol car. In some ways it does that by brazenly impersonating a petrol drivetrain. The surprising thng is that's absolutely not just a gimmick.

<br/><br/>
“Then in corners it has some original tricks of its own. It's not just fast, it's confident and playful so it's fun even when it's not going fast. It's useful and versatile too.
<br/><br/><br/>
“So it has many of the talents you expect from an electric car, and many more that so far are unique in EVs. Which makes us call it a new and brilliant chapter.</p>
        <a href="https://www.topgear.com/car-reviews/hyundai/ioniq-5-n" className='text'>Read the full IONIQ 5 N review</a>
      </div>
      <div className="right-side2">
      <img src={ioniq6} alt='ioniq5 back'/>
      </div>
    </div>
     {/* End Hyundai */}
    </div>
  )
}

export default Hyundai