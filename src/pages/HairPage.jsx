import React from 'react';
import HairPrices from '../components/HairPrices';
import '../reset.css'
import '../Main.css'

const HairPage = ({ setLightLink, moreInformation }) => {

   const hairServicesList = [
      { id: 1, name: 'Стрижка челки', price: '300', img: 1, time: '15', description: 'Стрижка челки - это быстрая и простая процедура, которая направлена на придание формы и стиля челке. Наши опытные стилисты профессионально подберут подходящую стрижку для вашей челки, учитывая форму лица и индивидуальные предпочтения, чтобы выглядеть свежо и аккуратно.' },

      { id: 2, name: 'Детская стрижка', price: '600', img: 1, time: '30 ', description: 'Детская стрижка - это услуга, предназначенная специально для детей. Наши стилисты создадут комфортную и дружелюбную атмосферу, чтобы ваш ребенок мог получить новую стрижку без стресса. Мы учтем индивидуальные предпочтения и структуру волос вашего ребенка, чтобы создать стильный и аккуратный образ.' },

      { id: 3, name: 'Мужская стрижка', price: '700', img: 1, time: '30 ', description: 'Мужская стрижка - это процедура, призванная создать стильный и аккуратный образ для мужчин. Наши опытные стилисты учтут индивидуальные особенности вашего лица и волос, чтобы подобрать стрижку, которая подходит вашему стилю и личности. Мы предлагаем широкий выбор модных и современных стрижек, чтобы помочь вам выглядеть наилучшим образом.' },

      { id: 4, name: 'Женская стрижка', price: '800', img: 1, time: '60 ', description: 'Женская стрижка - это процедура, позволяющая создать новый и свежий образ для женщин. Наши стилисты учтут ваши предпочтения, тип волос и форму лица, чтобы предложить вам идеальную стрижку. Мы предлагаем разнообразные варианты стрижек, от классических до модных и смелых, чтобы помочь вам выразить свой индивидуальный стиль.' },

      { id: 5, name: 'Подравнивание длины', price: '800', img: 1, time: '45 ', description: 'Подравнивание длины - это процедура, направленная на создание ровной и аккуратной формы волос. Наши стилисты подравняют концы волос, удалят секущиеся кончики и сделают ваши волосы более здоровыми и ухоженными. Мы используем высококачественные инструменты и техники, чтобы достичь оптимальных результатов.' },

      { id: 6, name: 'Укладка волос феном', price: '1 000', img: 1, time: '30 ', description: 'Укладка волос феном - это процедура, во время которой стилисты используют фен, чтобы создать желаемую форму и объем волос. Мы можем создать гладкую и блестящую укладку или придать волосам объем и текстуру. Наша команда стилистов обладает навыками и творческим подходом, чтобы помочь вам достичь желаемого стиля.' },

      { id: 7, name: 'Тонирование волос', price: '2 000', img: 1, time: '60 ', description: 'Тонирование волос - это процедура, позволяющая изменить цвет волос без значительных изменений в их структуре. Мы предлагаем широкий выбор оттенков и эффектов, чтобы помочь вам обновить свой образ или добавить яркие акценты. Наши профессиональные стилисты подберут тон, который соответствует вашим предпочтениям и типу волос.' },

      { id: 8, name: 'Осветление волос', price: '2 500', img: 1, time: '90 ', description: 'Осветление волос - это процедура, направленная на придание волосам светлого оттенка или создание мелирования. Наши стилисты используют высококачественные продукты и техники, чтобы достичь желаемого результата осветления. Мы также уделяем внимание сохранению здоровья волос, используя ухаживающие средства и методы, чтобы ваша укладка была яркой и здоровой.' },

      { id: 9, name: 'Окрашивание корней', price: '2 500', img: 1, time: '75', description: 'Окрашивание корней - это процедура, призванная обновить и поддержать цвет волос, фокусируясь на корнях. Мы используем профессиональные красители, чтобы точно соответствовать вашему текущему оттенку и сделать переход между окрашиваниями более плавным. Наша команда стилистов обладает опытом и навыками, чтобы обеспечить вам качественное окрашивание корней.' },

      { id: 10, name: 'Окрашивание волос в один тон', price: '4 000', img: 1, time: '120', description: 'Окрашивание волос в один тон - это процедура, при которой все волосы окрашиваются в один оттенок. Мы предлагаем широкий выбор оттенков, чтобы помочь вам найти идеальный цвет для вашего образа. Наши стилисты учтут вашу базовую цветовую палитру, структуру волос и предпочтения, чтобы создать стильное и гармоничное окрашивание.' },

      { id: 11, name: 'Химическая завивка', price: '6 000', img: 1, time: '180', description: 'Химическая завивка - это процедура, при которой создается желаемая форма и текстура волос с помощью химического воздействия. Мы используем качественные продукты и техники, чтобы обеспечить долговременный эффект завивки, который будет выглядеть естественно и здорово. Наша команда стилистов обладает опытом и экспертизой в области химической завивки, чтобы достичь вашей желаемой укладки.' },

      { id: 12, name: 'Нанопластика волос', price: '7 000', img: 1, time: '240', description: 'Нанопластика волос - это инновационная процедура, направленная на восстановление, укрепление и увлажнение волос. Мы используем специальные препараты, которые проникают в структуру волоса, заполняют пористые участки и восстанавливают его здоровье. Нанопластика позволяет достичь гладких, шелковистых и блестящих волос без непосильных усилий. Наша команда стилистов профессионально проведет процедуру нанопластики, чтобы вы получили прекрасный результат.' }
   ]



   return (
      <main className='servicesPages'>
         <HairPrices
            moreInformation={moreInformation}
            setLightLink={setLightLink}
            hairServicesList={hairServicesList}
            title={'Стрижки'}
         />
      </main>
   );
}

export default HairPage;
