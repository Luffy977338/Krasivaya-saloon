import React from 'react';
import { Link } from 'react-router-dom';
import cl from './Option.module.css'
import { motion } from 'framer-motion';

const Option = ({ link, img, name, getOptionStatusLink, delay }) => {

   const getSelectedOptionLink = () => {
      const selectedOptionLink = link
      getOptionStatusLink(selectedOptionLink)
   }

   const motionOption = {
      from: {
         y: 40,
         opacity: 0,
      },
      to: {
         y: 0,
         opacity: 1,
         transition: { duration: 0.4, delay: delay }
      }
   }


   return (
      <motion.div
         initial='from'
         whileInView='to'
         variants={motionOption}
         viewport={{ amount: 0.2 }}
      >
         <Link onClick={getSelectedOptionLink} to={link} className={cl.service}>
            <div className={cl.service__bar}>
               <img width='700px' height='400px' src={img} alt="" className={cl.service__icon} />
               <div className={cl.service__option}>
                  {name}
               </div>
            </div>
         </Link>
      </motion.div>
   );
}

export default Option;
