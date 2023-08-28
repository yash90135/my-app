import logo from './logo.svg';
import './App.css';
import Vector from './images/Vector.png'

function App() {
  return (
    <div >
     <div className='rectangle-27'>
      {/* <span className='rectangle-27' style={{width: "1440px",height: "42px"}}></span> */}
      <span className='banner'>
      <span className='banner-comp0'><img className="vehicle" src={Vector}></img></span>
      <span className='banner-comp'>
      Free Delivery &nbsp;&nbsp; 
      </span>
      <span className='banner-comp1'>|</span>
      <span className='banner-comp2' >Return Policy</span>
      </span>
     </div>
    </div>
  );
}

export default App;
