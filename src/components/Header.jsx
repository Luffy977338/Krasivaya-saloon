import React from 'react';
import { Link } from 'react-router-dom';
import '../Main.css'

const SaloonHeader = ({ lightLink, setLightLink }) => {

   const handleCLick = (index) => {
      setLightLink(index)
   }

   const getActiveButton = (index) => {
      if (index === lightLink) {
         return 'links__clicked'                 // Creating light effect on active button
      }
      return 'links'
   }

   return (
      <header className="saloon__header">
         <div className='header'>
            <Link to='/main' className='header__saloon-name' onClick={() => handleCLick(0)}>
               <span>k</span>
               <span>расивая</span>
            </Link>
            <div className='header__saloon-navigation'>
               <ul>
                  <li><Link to='/connection' className={getActiveButton(1)} onClick={() => handleCLick(1)} >Связь</Link></li>
                  <li><Link to='/about' className={getActiveButton(2)} onClick={() => handleCLick(2)} >О нас</Link></li>
                  <li><Link to='/reviews' className={getActiveButton(3)} onClick={() => handleCLick(3)} >Отзывы</Link></li>
                  <li><Link to='/staff' className={getActiveButton(4)} onClick={() => handleCLick(4)} >Персонал</Link></li>
               </ul>
            </div>
         </div>
      </header>
   );
}

export default SaloonHeader;
