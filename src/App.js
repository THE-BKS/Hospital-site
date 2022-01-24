import { useEffect, useState } from 'react';
import About_us from './Components/About_us';
import Accordion from './Components/Accordion/Accordion';
import Appointment from './Components/Appointment';
import Cards from './Components/Cards';
import Dashboard from './Components/Dashboard';
// import CarouselComponent from './Components/CarouselComponent';
import Facility from './Components/Facility';
import Footer from './Components/Footer';
import List from './Components/List';
import Login from './Components/Login';
import NavbarComponent from './Components/NavbarComponent';
import Review from './Components/Review';
import Service_card from './Components/Service_card';
import Slider from './Components/Slider/Slider';
import Testimonial from './Components/Testimonial/Testimonial';
import './styles.css'

function App() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message))
  // })
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src="/LOGO.jpg" className="App-logo" alt="logo" />
    //     <p>{!data ? "Loading..." : data}</p>
    //   </header>
    // </div>
    <div>
      <NavbarComponent />

      <Slider />

      {/* <Dashboard /> */}

      {/* <Login /> */}

      <Service_card />

      <Cards />

      {/* <List /> */}

      <Testimonial />

      <Facility />
      
      <Review />

      <Accordion />

      {/* <About_us /> */}

      {/* <Appointment /> */}

      <Footer />
    </div>
  );
}

export default App;
