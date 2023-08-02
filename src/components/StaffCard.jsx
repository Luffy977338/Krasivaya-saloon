import React from 'react';
import { motion } from 'framer-motion';

const StaffCard = ({ img, name, experience, work }) => {

   const motionContent = {
      from: {
         opacity: 0
      },
      to: {
         opacity: 1,
         transition: { delay: 0.3, duration: 0.5 }
      }
   }

   const motionImg = {
      fromImg: {
         x: -40,
         opacity: 0,
      },
      toImg: {
         x: 0,
         opacity: 1,
         transition: { duration: 0.3 }
      }
   }

   const motionInfo = {
      fromInfo: {
         x: 100,
         opacity: 0
      },
      toInfo: {
         x: 50,
         opacity: 1,
         transition: { duration: 0.3 }
      }
   }

   return (
      <motion.div
         initial='from'
         animate='to'
         variants={motionContent}
         className='staff__content'
      >
         <motion.div
            initial='fromImg'
            whileInView='toImg'
            variants={motionImg}
            viewport={{ amount: 0.2 }}
            className='staff__content-img'
         >
            <img src={img} alt="" />
         </motion.div>
         <motion.div
            initial='fromInfo'
            whileInView='toInfo'
            variants={motionInfo}
            viewport={{ amount: 0.2 }}
            className='staff__info'
         >
            <div className='staff__info-name'>
               {name}
            </div>
            <hr />
            <div className='staff__info-experience'>
               Стаж: {experience}
            </div>
            <div className='staff__info-work'>
               {work}
            </div>
         </motion.div>
      </motion.div>
   );
}

export default StaffCard;
