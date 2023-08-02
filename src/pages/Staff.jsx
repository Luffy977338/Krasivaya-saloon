import React from 'react';
import StaffCard from '../components/StaffCard';
import { motion, transform } from 'framer-motion';


const Staff = () => {

   const staffHairList = [
      { id: 1, img: 1, name: 'Виктория', experience: '4 года', work: 'Занимается мужскими, женскими и детскими стрижками, окрашиванием, хим. завивкой и нанопластикой' },
      { id: 1, img: 1, name: 'Виктория', experience: '4 года', work: 'Занимается мужскими, женскими и детскими стрижками, окрашиванием, хим. завивкой и нанопластикой' },
      { id: 1, img: 1, name: 'Виктория', experience: '4 года', work: 'Занимается мужскими, женскими и детскими стрижками, окрашиванием, хим. завивкой и нанопластикой' },
   ]


   const staffManicureList = [
      { id: 1, img: 1, name: 'Виктория', experience: '4 года', work: 'Занимается мужскими, женскими и детскими стрижками, окрашиванием, хим. завивкой и нанопластикой' },
      { id: 1, img: 1, name: 'Виктория', experience: '4 года', work: 'Занимается мужскими, женскими и детскими стрижками, окрашиванием, хим. завивкой и нанопластикой' },
      { id: 1, img: 1, name: 'Виктория', experience: '4 года', work: 'Занимается мужскими, женскими и детскими стрижками, окрашиванием, хим. завивкой и нанопластикой' },
   ]

   const motionHeader = {
      fromHeader: {
         y: -40,
         opacity: 0,
      },
      toHeader: {
         y: 0,
         opacity: 1,
         transition: { duration: 0.2 }
      }
   }

   const motionText = {
      fromText: {
         x: -40,
         opacity: 0,
      },
      toText: {
         x: 0,
         opacity: 1,
         transition: { duration: 0.2, delay: 0.2 }
      }
   }

   const motionBar = {
      fromBar: {
         opacity: 0,
      },
      toBar: {
         opacity: 1,
         transition: { duration: 0.3, delay: 0.4 }
      }
   }

   return (
      <main className='staff'>
         <article>
            <div>
               <motion.div
                  initial='fromHeader'
                  whileInView='toHeader'
                  variants={motionHeader}
                  viewport={{ once: true }}
                  className='staff__title'
               >
                  Давайте знакомиться
               </motion.div>
               <div className='staff__type'>
                  <motion.h2
                     initial='fromText'
                     whileInView='toText'
                     variants={motionText}
                     style={{ marginTop: '100px' }}
                  >
                     Парикмахеры
                  </motion.h2>
                  <motion.div
                     initial='fromBar'
                     whileInView='toBar'
                     variants={motionBar}
                     className='staff__bar'
                  >
                     {staffHairList.map((item) => (
                        <StaffCard key={item.id} name={item.name} img={item.img} experience={item.experience} work={item.work} />
                     ))}
                  </motion.div>
               </div>
               <div className='staff__type'>
                  <motion.h2
                     initial='fromText'
                     whileInView='toText'
                     variants={motionText}
                  >
                     Мастера маникюра
                  </motion.h2>
                  <motion.div
                     initial='fromBar'
                     whileInView='toBar'
                     variants={motionBar}
                     className='staff__bar'
                  >
                     {staffManicureList.map((item) => (
                        <StaffCard key={item.id} name={item.name} img={item.img} experience={item.experience} work={item.work} />
                     ))}
                  </motion.div>
               </div>
            </div>
         </article>
      </main >
   );
}

export default Staff;