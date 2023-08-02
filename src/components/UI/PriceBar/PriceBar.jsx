import React, { forwardRef } from 'react';
import cl from './PriceBar.module.css'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const PriceBar = forwardRef(({ classes, name, price, id, img, time, description, moreInformation }, ref) => {

   const serviceInformation = () => {
      const selectedService = { id, name, price, img, time, description }
      moreInformation(selectedService)
   }

   const motionPriceBar = {
      from: {
         y: 100,
         opacity: 0,
      },
      to: {
         y: 0,
         opacity: 1,
         transition: { duration: 0.3, delay: 0.1 }
      }
   }

   return (
      <motion.div
         initial='from'
         whileInView='to'
         variants={motionPriceBar}
      >
         <Link ref={ref} style={classes} onClick={serviceInformation} to='/moreInformation' className={cl.content__bar} >
            <div className={cl.content__bar_name}>{name}</div>
            <div className={cl.content__bar_price}>{price} ₽</div>
         </Link>
      </motion.div>
   );
})

