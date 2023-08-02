import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

const MoreInformation = ({ information, optionStatus }) => {

   const motionImg = {
      fromImg: {
         x: -40,
         opacity: 0,
      },
      toImg: {
         x: 0,
         opacity: 1,
         transition: { duration: 0.2 }
      }
   }

   const motionInfoSide = {
      fromInfo: {
         x: 40,
         opacity: 0,
      },
      toInfo: {
         x: 0,
         opacity: 1,
         transition: { duration: 0.2, delay: 0.2 }
      }
   }


   return (
      <main>
         <div className='moreInfo'>
            <Link to={optionStatus} className='returnBack'>
               <span className='returnBack__button' ></span>
            </Link>
            <div className='info'>
               <motion.div
                  initial='fromImg'
                  whileInView='toImg'
                  variants={motionImg}
                  viewport={{ once: true }}
                  className='info__img'
               >
                  {information.img}
               </motion.div>
               <motion.div
                  initial='fromInfo'
                  whileInView='toInfo'
                  variants={motionInfoSide}
                  viewport={{ once: true }}
                  className='info__side'
               >
                  <div className='info__side-price'>
                     {information.price} ₽
                  </div>
                  <div className='info__side-name'>
                     {information.name}
                  </div>
                  <hr />
                  <div className='info__side-time'>
                     ~{information.time} минут
                  </div>
                  <div className='info__side-description'>
                     {information.description}
                  </div>
               </motion.div>
            </div>
         </div>
      </main>
   );
}

export default MoreInformation;
