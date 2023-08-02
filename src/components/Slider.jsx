import React from 'react';
import hairCut2 from '../images/hairCut2.jpg'
import hairCut4 from '../images/hairCut4.png'
import hairCut5 from "../images/hairCut5.jpg"
import manicure1 from '../images/manicure1.jpg'
import manicure2 from '../images/manicure2.jpg'
import manicure3 from '../images/manicure3.jpg'
import { motion } from 'framer-motion';

const ContentHeader = () => {

   const motionText = {
      from: {
         y: -15,
         opacity: 0,
      },
      to: {
         y: 0,
         opacity: 1,
         transition: { delay: 0.1, duration: 0.4 }
      }
   }

   const motionSlider = {
      fromSlider: {
         opacity: 0,
      },
      toSlider: {
         opacity: 1,
         transition: { delay: 0.3, duration: 0.3 }
      }
   }

   return (
      <header className='main__header'>
         <div className='main__header-text'>
            <motion.div
               initial='from'
               whileInView='to'
               variants={motionText}
               viewport={{ once: true }}
            >
               Выбирайте стиль, который подойдет вам
            </motion.div>
         </div>
         <motion.div
            initial='fromSlider'
            whileInView='toSlider'
            variants={motionSlider}
            viewport={{ once: true }}
            className='main__header-slider'
         >
            <ul>
               <li><img width='525' height='505' src={hairCut4} alt="" /></li>
               <li><img width='525' height='505' src={manicure1} alt="" /></li>
               <li><img width='525' height='505' src={hairCut5} alt="" /></li>
               <li><img width='525' height='505' src={manicure2} alt="" /></li>
               <li><img width='525' height='505' src={hairCut2} alt="" /></li>
               <li><img width='525' height='505' src={manicure3} alt="" /></li>
               <li><img width='525' height='505' src={hairCut4} alt="" /></li>
               <li><img width='525' height='505' src={manicure1} alt="" /></li>
               <li><img width='525' height='505' src={hairCut5} alt="" /></li>
               <li><img width='525' height='505' src={manicure2} alt="" /></li>
               <li><img width='525' height='505' src={hairCut2} alt="" /></li>
               <li><img width='525' height='505' src={manicure3} alt="" /></li>
            </ul>
         </motion.div>
      </header>
   );
}

export default ContentHeader;
