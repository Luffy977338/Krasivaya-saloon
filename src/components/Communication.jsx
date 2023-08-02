import React from 'react';
import vk from '../images/vk.svg'
import telegram from '../images/telegram.svg'
import { motion, } from 'framer-motion';

const Communication = () => {

   const motionConnection = {
      fromConnection: {
         y: -30,
         opacity: 0,
      },
      toConnection: {
         y: 0,
         opacity: 1,
         transition: { delay: 0.1, duration: 0.2 }
      }
   }

   const motionVk = {
      fromVk: {
         x: -40,
         opacity: 0,
      },
      toVk: {
         x: 0,
         opacity: 1,
         transition: { delay: 0.4, duration: 0.1, ease: 'easeIn' }
      }
   }

   const motionTelegram = {
      fromTelegram: {
         x: 40,
         opacity: 0,
      },
      toTelegram: {
         x: 0,
         opacity: 1,
         transition: { delay: 0.6, duration: 0.1, ease: 'easeIn' }
      }
   }


   return (
      <div className='communication'>
         <motion.div
            initial='fromConnection'
            whileInView='toConnection'
            variants={motionConnection}
            viewport={{ once: true }}
            className='communication__methods'
         >
            <p>Свяжитесь с нами</p>
         </motion.div>
         <div className='communication__communities'>
            <motion.div
               initial='fromVk'
               whileInView='toVk'
               viewport={{ once: true }}
               variants={motionVk}
               className='communication__communities-vk'
            >
               <a href="">Вконтакте</a>
               <img width={50} height={50} src={vk} alt="" />
            </motion.div>
            <motion.div
               initial='fromTelegram'
               whileInView='toTelegram'
               variants={motionTelegram}
               viewport={{ once: true }}
               className='communication__communities-telegram'
            >
               <a href="">Телеграм</a>
               <img width={50} height={50} src={telegram} alt="" />
            </motion.div>
         </div>
      </div>
   );
}

export default Communication;
