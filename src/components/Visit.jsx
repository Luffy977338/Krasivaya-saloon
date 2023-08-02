import React, { forwardRef } from 'react';
import metro from '../images/metro.png'
import { motion } from 'framer-motion';

export const Visit = forwardRef((props, ref) => {

   const motionImg = {
      fromImg: {
         x: -40,
         opacity: 0,
      },
      toImg: {
         x: 0,
         opacity: 1,
         transition: { delay: 0.2, duration: 0.3 },
      }
   }

   const motionContent = {
      fromContent: {
         y: 10,
         opacity: 0,
      },
      toContent: {
         y: 0,
         opacity: 1,
         transition: { delay: 0.2, duration: 0.3 }
      }
   }

   const motionNumber = {
      fromNumber: {
         x: 40,
         opacity: 0,
      },
      toNumber: {
         x: 0,
         opacity: 1,
         transition: { delay: 0.2, duration: 0.3 }
      }
   }

   return (
      <div ref={ref} className='visit'>
         <motion.div
            initial='fromImg'
            whileInView='toImg'
            variants={motionImg}
            className='visit__map'
         >
            <img width={500} height={270} src={props.img} alt="" />
         </motion.div>
         <motion.div
            initial='fromContent'
            whileInView='toContent'
            variants={motionContent}
         >
            <div>
               <a href='https://www.google.com/maps/place/%D0%9A%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D0%B0%D1%8F/@55.6830872,37.8651678,20z/data=!4m16!1m9!3m8!1s0x414ab6138fdcac3f:0xcf95ec7fa8eb5a97!2z0YPQuy4gMy3QtSDQn9C-0YfRgtC-0LLQvtC1INC-0YLQtNC10LvQtdC90LjQtSwgNjUsINCb0Y7QsdC10YDRhtGLLCDQnNC-0YHQutC-0LLRgdC60LDRjyDQvtCx0LsuLCAxMDkxNTY!3b1!8m2!3d55.6831076!4d37.8649938!10e3!16s%2Fg%2F11sgzzd8z6!3m5!1s0x414ab6138928a9f1:0x7e40ed3a8b88932c!8m2!3d55.6831076!4d37.8649938!16s%2Fg%2F12qh49tvt?entry=ttu' target='_blank' className='visit__address'>
                  Г. {props.city}, Ул. {props.street}, Дом {props.house}, Этаж {props.stage}
               </a>
            </div>
            <div className='visit__metro'>
               <img width={32} height={32} src={metro} alt="" />
               <p>{props.metro}</p>
            </div>
            <div className='visit__workTime'>
               {props.workTime}, обед: {props.restTime}
            </div>
         </motion.div>
         <motion.div
            initial='fromNumber'
            whileInView='toNumber'
            variants={motionNumber}
            className='visit__number'
         >
            {props.number}
         </motion.div>
      </div>
   );
})

export const MVisit = motion(Visit);
