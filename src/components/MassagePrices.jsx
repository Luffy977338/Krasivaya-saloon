import React from 'react';
import { PriceBar } from './UI/PriceBar/PriceBar';
import Description from './UI/Description/Description';
import { motion } from 'framer-motion';

const MassagePrices = ({ massageServicesList, title, setLightLink, moreInformation }) => {

   const motionText = {
      hidden: {
         x: -20,
         opacity: 0,
      },
      visible: {
         x: 0,
         opacity: 1,
         transition: { duration: 0.5 }
      }
   }

   return (
      <article className='servicesArticle'>
         <motion.h2
            initial='hidden'
            whileInView='visible'
            variants={motionText}
            viewport={{ once: true }}
         >
            {title}
         </motion.h2>
         <div className='content'>
            {massageServicesList.map((item) =>
               item.id === massageServicesList.length ? <PriceBar classes={{ borderBottom: '1px solid #f7f7f7' }} moreInformation={moreInformation} id={item.id} name={item.name} price={item.price} img={item.img} time={item.time} description={item.description} key={item.id} /> : <PriceBar moreInformation={moreInformation} id={item.id} name={item.name} price={item.price} img={item.img} time={item.time} description={item.description} key={item.id} />
            )}
         </div>
         <Description setLightLink={setLightLink} />
      </article>
   );
}

export default MassagePrices;
