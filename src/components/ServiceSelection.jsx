import React from 'react';
import Option from './UI/Option/Option';
import hairPhoto from '../images/hairCut5.jpg'
import manicurePhoto from '../images/manicure4.webp'
import massagePhoto from '../images/massage.jpg'

const ServiceSelection = ({ getOptionStatusLink }) => {

   const OptionList = [
      {
         link: '/hairPage',
         img: hairPhoto,
         name: 'Стрижки',
         delay: 0
      },
      {
         link: '/manicurePage',
         img: manicurePhoto,
         name: 'Маникюр',
         delay: 0.2
      },
      {
         link: '/massagePage',
         img: massagePhoto,
         name: 'Массаж',
         delay: 0.1
      }
   ]

   return (
      <article className='main__article'>
         {OptionList.map((item) =>
            <Option delay={item.delay} getOptionStatusLink={getOptionStatusLink} link={item.link} img={item.img} name={item.name} />
         )}
      </article>
   );
}

export default ServiceSelection;
