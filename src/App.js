import './App.css';
import Carousel from './img/components/Carousel';
import porsche from './img/porsche.avif';
import tycan  from './img/tycan.avif';
import tysvg from './img/tycan.svg';
import front from './img/iris.webp'
import back from './img/back.webp'
import frontTesla from './img/frontTesla.webp'
import interior from './img/interior.avif'
import backTesla from './img/tesla5.webp'
import hyndaiLogo from './img/logo.png'
import ioniq1 from './img/ioniq1.jpg'
import ioniq2 from './img/ioniq2.jpg'
import ioniq3 from './img/ioniq3.jpg'
import ioniq4 from './img/ioniq4.jpg'
import ioniq5 from './img/ioniq5.jpg'
import ioniq6 from './img/ioniq6.jpg'
import tesla1 from './img/components/tesla1.png'
import tesla2 from './img/components/tesla2.png'
import tesla3 from './img/components/tesla3.png'
import tesla4 from './img/components/tesla4.png'

const images = [
  tesla1,
  tesla2,
  tesla3,
  tesla4
];

const images2 = [
  ioniq1,
  ioniq2,
  ioniq3
];


function App() {
  return (
    <div className="App">
    {/* front image */}
        <div class="card">
        <div class="tools">
            <div class="circle">
            <svg xmlns="http://www.w3.org/2000/svg" width={"240"} height={"240"} viewBox="0 0 4500 300"><title>Porsche</title><path d="M502 221c48.1 0 74-25.9 74-74V74c0-48.1-25.9-74-74-74H0v300h68v-79h434zm6-143v65c0 7.8-4.2 12-12 12H68V66h428c7.8 0 12 4.2 12 12zm228 222c-48.1 0-74-25.9-74-74V74c0-48.1 25.9-74 74-74h417c48.1 0 74 25.9 74 74v152c0 48.1-25.9 74-74 74H736zm411-66c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12H742c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h405zm675-36c39.844 16.757 67.853 56.1 68 102h-68c0-54-25-79-79-79h-361v79h-68V0h502c48.1 0 74 25.9 74 74v50.14c0 46.06-23.75 71.76-68 73.86zm-12-43c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12h-428v89h428zm162-81c0-48.1 25.9-74 74-74h492v56h-486c-7.8 0-12 4.2-12 12v42c0 7.8 4.2 12 12 12h422c48.1 0 74 25.9 74 74v30c0 48.1-25.9 74-74 74h-492v-56h486c7.8 0 12-4.2 12-12v-42c0-7.8-4.2-12-12-12h-422c-48.1 0-74-25.9-74-74V74zm661 0c0-48.1 25.9-74 74-74h480v66h-474c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h474v66h-480c-48.1 0-74-25.9-74-74V74zM3817 0v300h-68V183h-407v117h-68V0h68v117h407V0h68zm156 56v66h527v56h-527v66h527v56h-595V0h595v56h-527z"></path></svg>
            </div>
            <br/><br/><br/>
          </div>
          <div class="card__content">
          <h1 style={{color: 'rgb(214, 214, 186)',fontSize: '130px', position: 'absolute', marginLeft: '20%'}}>Porsche Taycan</h1>
            <img src={porsche} alt='porsche'/>
          </div>
      </div>

      {/* second image */}
      <div class="card">
      <div class='tools'>
      <span><img src={tysvg} height={'300px'} width={'300px'} alt='tycan'/></span>
      </div>
      <div class="card__content">
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
      <img src={front} alt='porsche'/>
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
      <img src={back} alt='Tesla'/>
      </div>
    </div>
{/* Porsche ends */}

    {/* Tesla Starts */}
    <div class="card">
    <svg width="500"  viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7M308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7"></path></svg>
    <h1 style={{color: 'black',fontSize: '130px', position: 'absolute',marginTop: '30%', marginLeft: '33%'}}>Model S</h1>
            <Carousel images={images}/>
      </div>
{/* second image */}
    <div class="card">
      <div class="card__content">
      <div><img src={interior} width={'100%'} height={'650px'}  alt='tycan'/></div>  
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
      <img src={frontTesla} alt='porsche'/>
      </div>
    </div>

    {/* Second left right split */}
<div className="container">
      <div className="left-side">
      <h1 className='pt-sans-bold-italic'>Tesla Model S</h1>
        <p className='text2'>This is the future we were promised – a car with sentience, a sense of humour, and a fresh take on the old norms. After trying this, your old repmobile will just feel a bit dull. The Model S has been in production since mid-2017, but even heading into old age, nothing on the market has yet managed to beat it on all fronts. While not without flaws, it is quite simply one of the most interesting, compelling cars in the world right now. We might even look back on it as the car that changed the way we all drive.</p>
        <a href="https://www.topgear.com/car-reviews/tesla/model-s" className='text'>Read the full Tesla Model S review</a>
      </div>
      <div className="right-side">
      <img src={backTesla} alt='porsche'/>
      </div>
    </div>
<br/>
    {/* Tesla ends */}

    {/* Hyndai starts */}
    <div class="card">
        <div class="tools">
            <div class="circle">
            <br/>
            <img src={hyndaiLogo} alt='hyndaiLogo'/>
            </div>
          </div>
          <div class="card__content">
            <Carousel images={images2}/>
          </div>
      </div>
    {/* Second Image */}
      <div class="card">
      <h1 className='pt-sans-bold-italic'>Functional aesthetics</h1>
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
      <img src={ioniq5} alt='porsche'/>
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
      <div className="right-side">
      <img src={ioniq6} alt='porsche'/>
      </div>
    </div>
    </div>

    

  );
}

export default App;
