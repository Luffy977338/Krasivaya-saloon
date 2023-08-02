import React from 'react';
import '../reset.css';
import '../Main.css';
import Slider from '../components/Slider';
import ServiceSelection from '../components/ServiceSelection';

const Main = ({ getOptionStatusLink }) => {

   return (
      <main className='main'>
         <Slider />
         <ServiceSelection getOptionStatusLink={getOptionStatusLink} />
      </main>
   );
}

export default Main;
