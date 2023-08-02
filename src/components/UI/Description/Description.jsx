import React from 'react';
import { Link } from 'react-router-dom';
import cl from './Description.module.css'
import { motion } from 'framer-motion';

const Description = ({ setLightLink }) => {

   const motionDescription = {
      hidden: {
         y: 40,
         opacity: 0,
      },
      visible: {
         y: 0,
         opacity: 1,
      }
   }

   return (
      <motion.div
         initial='hidden'
         whileInView='visible'
         variants={motionDescription}
         viewport={{ amount: 0.5 }}
         className={cl.description}
      >
         <span>Больше информации</span>
         <p>
            о нас, стрижках и услугах можно узнать <Link
               onClick={() => setLightLink(1)}
               to='/connection'>связавшись с нами.
            </Link>
            <br />Если вам надо найти нас на картах, <a href='https://www.google.com/maps/place/%D0%9A%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D0%B0%D1%8F/@55.6830872,37.8651678,20z/data=!4m16!1m9!3m8!1s0x414ab6138fdcac3f:0xcf95ec7fa8eb5a97!2z0YPQuy4gMy3QtSDQn9C-0YfRgtC-0LLQvtC1INC-0YLQtNC10LvQtdC90LjQtSwgNjUsINCb0Y7QsdC10YDRhtGLLCDQnNC-0YHQutC-0LLRgdC60LDRjyDQvtCx0LsuLCAxMDkxNTY!3b1!8m2!3d55.6831076!4d37.8649938!10e3!16s%2Fg%2F11sgzzd8z6!3m5!1s0x414ab6138928a9f1:0x7e40ed3a8b88932c!8m2!3d55.6831076!4d37.8649938!16s%2Fg%2F12qh49tvt?entry=ttu' target='_blank'>кликните сюда.</a><br />Становитесь красивее с нами
         </p>
      </motion.div>
   );
}

export default Description;
