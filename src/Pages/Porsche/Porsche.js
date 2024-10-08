import React from 'react'
import porsche from "../../img/porsche/porsche.avif";
import tycan  from '../../img/porsche/tycan.avif';
import tysvg from '../../img/porsche/tycan.svg';
import front from '../../img/porsche/iris.webp'
import back from '../../img/porsche/back.webp'

const Porsche = () => {
  return (
    <div>
        
    {/* front image */}
    <div className="card">
        <div className="tools">
            <div className="circle">
            <svg xmlns="http://www.w3.org/2000/svg" width={"240"} height={"240"} viewBox="0 0 4500 300"><title>Porsche</title><path d="M502 221c48.1 0 74-25.9 74-74V74c0-48.1-25.9-74-74-74H0v300h68v-79h434zm6-143v65c0 7.8-4.2 12-12 12H68V66h428c7.8 0 12 4.2 12 12zm228 222c-48.1 0-74-25.9-74-74V74c0-48.1 25.9-74 74-74h417c48.1 0 74 25.9 74 74v152c0 48.1-25.9 74-74 74H736zm411-66c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12H742c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h405zm675-36c39.844 16.757 67.853 56.1 68 102h-68c0-54-25-79-79-79h-361v79h-68V0h502c48.1 0 74 25.9 74 74v50.14c0 46.06-23.75 71.76-68 73.86zm-12-43c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12h-428v89h428zm162-81c0-48.1 25.9-74 74-74h492v56h-486c-7.8 0-12 4.2-12 12v42c0 7.8 4.2 12 12 12h422c48.1 0 74 25.9 74 74v30c0 48.1-25.9 74-74 74h-492v-56h486c7.8 0 12-4.2 12-12v-42c0-7.8-4.2-12-12-12h-422c-48.1 0-74-25.9-74-74V74zm661 0c0-48.1 25.9-74 74-74h480v66h-474c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h474v66h-480c-48.1 0-74-25.9-74-74V74zM3817 0v300h-68V183h-407v117h-68V0h68v117h407V0h68zm156 56v66h527v56h-527v66h527v56h-595V0h595v56h-527z"></path></svg>
            </div>
            <br/><br/><br/>
          </div>
          <div className="card__content">
          <h1 className='bold' >Porsche Taycan</h1>
            <img src={porsche} alt='porsche'/>
          </div>
      </div>

      {/* second image */}
      <div className="card">
      <div className='tools'>
      <span><img src={tysvg} height={'300px'} width={'300px'} alt='tycan'/></span>
      </div>
      <div className="card__content">
      <div><img src={tycan} alt='tycan'/></div>  
      </div>
      </div>

      {/* first left right split */}
      <div className="container">
      <div className="left-side">
        <h1 className='pt-sans-bold-italic'>4.5s</h1>
        <p className='text2'>0 - 60 mph with Launch Control</p>
        <h1 className='pt-sans-bold-italic'>300 kW / 402 hp</h1>
        <p className='text2'>Power up to (kW)/Power up to (HP)</p>
        <h1 className='pt-sans-bold-italic'>143mph</h1>
        <p className='text2'>Top track Speed (with summer tries)</p>
      </div>
      <div className="right-side">
      <img src={front} alt='porsche front'/>
      </div>
    </div>

{/* second left right split */}
    <div className="container">
      <div className="left-side">
        <h1 className='pt-sans-bold-italic'>Porsche Taycan</h1>
        <p className='text2'>The Taycan can absolutely entertain on the right road and is a delight to cruise in - a GT with the heart of a sports car. More importantly, it’s a proper Porsche that just happens to run on electricity</p>
        <a href="https://www.topgear.com/car-reviews/porsche/taycan" className='text'>Read the full Porsche Taycan review</a>

      </div>
      <div className="right-side">
      <img src={back} alt='Porsche back'/>
      </div>
    </div>
{/* Porsche ends */}
    </div>
  )
}

export default Porsche