import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import logo from './Components/logo.png'
import Blocks from './Components/Blocks';
import Vector from './Components/Vector.png';
import ArrowLeft from './Components/Arrow Left.png';
import ArrowRight from './Components/ArrowRight.png';
import Frame from './Components/Frame.png'

const App = () => {
  return (
    <>
      <Header className='Head'/>
      <div className='AppMain'>
        <img src={Vector} alt="" className='Vector' />
        <div className='App'>
          <h1 className='AppText'>Добро пожаловать в академию!</h1>
        </div>
        <div className='Blog'>
          <img src={logo} alt="" width="519px" height="383px"/>
        </div>
        <div className='About'>
          <h1 className='TextView'>Саламатов Нурдаулет</h1>
          <p className='TextPadding'>Город:Томск</p>
          <p className='TextAbout'>Перед оценкой данной работы, хочу немножно рассказать о себе. Я магистрант факультета инновационных технологий, ТУСУР.
            Интерес к разработке сайтов, приложении проявлялся еще в школьные времена, но к сожалению, не удалось сохранить то желание стать front-end девелепером.
            Сейчас мне не хватило времени что бы выполнить задание до конца, потому что грубо говоря, я познакомился с ReactJS буквально пару недель назад. Я очень хочу попасть к вам на стажировку и буду продолжать развиваться в данном направлений.
          </p>
        </div>
        <div className='Block'>
         <Blocks />
        </div>
        <div className='Buttons'>
        <button className='LowButtons'>
          <img src={ArrowLeft} alt="" className='ImgButtons'/>
          </button>
          <button className='LowButtonsNext'>
          <img src={ArrowRight} alt="" className='ImgButtons'/>
          </button>
        </div>
        <div className='LowTab'>
          <h className='LowTabText'>© iLINK ACADEMY. ALL RIGHTS RESERVED. 2022</h>
          <img src={Frame} alt='' className='LowFrame'/>
        </div>
      </div>
    </>
  )
}

export default App;

