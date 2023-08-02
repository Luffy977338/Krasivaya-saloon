import React from 'react';
import { MVisit } from '../components/Visit';
import Communication from '../components/Communication';
import map1 from '../images/map.png'

const Connection = () => {

   const visitList = [
      {
         id: 1,
         img: map1,
         city: 'Люберцы',
         street: '3-е почтовое отделение',
         house: '65',
         stage: '1',
         metro: 'Жулебино',
         workTime: '9:00 - 21:00',
         restTime: '14:30 - 15:30',
         number: '+7 926 171 26-07'
      },
      {
         id: 2,
         img: map1,
         city: 'Москва',
         street: 'Улица Арбат',
         house: '10',
         stage: '2',
         metro: 'Арбатская',
         workTime: '10:00 - 20:00',
         restTime: '13:00 - 14:00',
         number: '+7 926 123 45-67'
      },
      {
         id: 3,
         img: map1,
         city: 'Санкт-Петербург',
         street: 'Невский проспект',
         house: '25',
         stage: '3',
         metro: 'Гостиный двор',
         workTime: '8:30 - 19:30',
         restTime: '12:30 - 13:30',
         number: '+7 926 987 65-43'
      },
      {
         id: 4,
         img: map1,
         city: 'Екатеринбург',
         street: 'Ленина',
         house: '50',
         stage: '4',
         metro: 'Площадь 1905 года',
         workTime: '9:00 - 20:00',
         restTime: '15:00 - 16:00',
         number: '+7 926 111 22-33'
      },
      {
         id: 5,
         img: map1,
         city: 'Новосибирск',
         street: 'Красный проспект',
         house: '15',
         stage: '5',
         metro: 'Площадь Ленина',
         workTime: '8:00 - 22:00',
         restTime: '13:30 - 14:30',
         number: '+7 926 444 55-66'
      }
   ]

   const motionVisit = {
      from: {
         opacity: 0,
      },
      to: {
         opacity: 1,
         transition: { delay: 1, duration: 0.5 }
      }
   }


   return (
      <main className='connection'>
         <article>
            <Communication />
            {visitList.map((item) =>
               <MVisit
                  initial='from'
                  animate='to'
                  variants={motionVisit}
                  viewport={{ once: true }}
                  key={item.id}
                  img={item.img}
                  city={item.city}
                  street={item.street}
                  house={item.house}
                  stage={item.stage}
                  metro={item.metro}
                  workTime={item.workTime}
                  restTime={item.restTime}
                  number={item.number}
               />
            )}
         </article>
      </main>
   );
}

export default Connection;
