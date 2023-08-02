import React from 'react';
import { motion } from 'framer-motion';

const About = () => {

   const motionTitle = {
      fromTitle: {
         y: -30,
         opacity: 0,
      },
      toTitle: {
         y: 0,
         opacity: 1,
         transition: { duration: 0.2 }
      }
   }

   const motionRight = {
      fromLeft: {
         x: -280,
         opacity: 0,
      },
      toRight: {
         x: -250,
         opacity: 1,
         transition: { duration: 0.2, }
      }
   }

   const motionLeft = {
      fromRight: {
         x: 380,
         opacity: 0,
      },
      toLeft: {
         x: 350,
         opacity: 1,
         transition: { duration: 0.2 }
      }
   }

   const motionInfo = {
      fromInfo: {
         opacity: 0,
      },
      toInfo: {
         opacity: 1,
         transition: { delay: 0.3, duration: 0.3 }
      }
   }

   return (
      <main className='aboutUs'>
         <article>
            <div className='about'>
               <motion.div
                  initial='fromTitle'
                  whileInView='toTitle'
                  variants={motionTitle}
                  viewport={{ once: true }}
                  className='about__title'
               >
                  Узнайте больше о нас
               </motion.div>
               <motion.div className='about__info'
                  initial='fromInfo'
                  whileInView='toInfo'
                  variants={motionInfo}
                  viewport={{ once: true }}
               >
                  <motion.div
                     initial='fromLeft'
                     whileInView='toRight'
                     variants={motionRight}
                     custom={0.2}
                  >
                     Мы — команда профессионалов, предлагающая вам уникальные возможности для того, чтобы вы почувствовали себя по-настоящему великолепно. Наша цель — подчеркнуть вашу природную красоту и помочь вам достичь непревзойденного стиля.
                  </motion.div>
                  <motion.div
                     initial='fromRight'
                     whileInView='toLeft'
                     variants={motionLeft}
                     custom={0.2}
                  >
                     В нашем салоне мы предлагаем широкий спектр услуг, чтобы удовлетворить все ваши потребности в уходе за внешностью. Наши опытные стилисты и мастера косметологии обладают безупречным мастерством и знаниями, чтобы помочь вам создать желаемый образ.
                  </motion.div>
                  <motion.div
                     initial='fromLeft'
                     whileInView='toRight'
                     variants={motionRight}
                     custom={0.2}
                  >
                     Мы стремимся обеспечить максимальный комфорт для наших клиентов, предлагая уютную и расслабляющую атмосферу в нашем салоне. Здесь вы сможете насладиться высококлассным обслуживанием, используя только качественные продукты и инновационные техники.
                  </motion.div>
                  <motion.div
                     initial='fromRight'
                     whileInView='toLeft'
                     variants={motionLeft}
                     custom={0.2}
                  >
                     Наша миссия — не просто изменить ваш внешний вид, но и помочь вам обрести уверенность и гармонию. Мы верим, что истинная красота начинается с внутреннего самочувствия, поэтому в нашем салоне мы стремимся создать идеальное сочетание расслабления и эффективных процедур.
                  </motion.div>
                  <motion.div
                     initial='fromLeft'
                     whileInView='toRight'
                     variants={motionRight}
                     custom={0.2}
                  >
                     Приходите к нам в гости, и вы откроете для себя новую грань собственной красоты. Мы будем рады помочь вам воплотить в жизнь ваши самые смелые идеи и сделать каждое посещение нашего салона незабываемым.
                  </motion.div>
                  <motion.div
                     initial='fromRight'
                     whileInView='toLeft'
                     variants={motionLeft}
                     custom={0.2}
                  >
                     Выбирайте качество, выбирайте стиль, выбирайте наш салон красоты. Мы готовы подарить вам незабываемые моменты и уверенность в себе.
                  </motion.div>
               </motion.div>
            </div>
         </article>
      </main >
   );
}

export default About;