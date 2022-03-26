import React from 'react';
import './Window.css';
import 'react-bootstrap';
import info from './InfoSquare.png'
import PlusButton from './PlusButton.png'

const Modal = () => {
    const onPressClick = () => alert();
    return (
        <>
        <button className='AnswerButton'>
                <img src={PlusButton} alt="" className=''/>
                <p className='TextAnswer'>Добавить отзыв</p>
                </button>
        <div className='Modal' id='myModal'>
            <div className='ModalContent'>
                <div>
                    <h1 className='TextH1'>Отзыв</h1>
                    <label className='inputText'>
                        Как вас зовут?
                        <input className='input' type="text" name="name" />
                    </label>
                    <button className='inputButton'>
                        <img src={PlusButton} alt="" className=''/>
                    <text className='textButtoninput'>Добавить фото</text></button>
                    <label className='inputTextLike'>
                    Все ли вам понравилось?
                        <input className='inputLike' type="text" name="name" />
                    </label>
                    <button className='inputButtonLike' onClick={onPressClick}><text className='TextButtonSubmit'>Отправить отзыв</text></button>
                    <img src={info} className='infoIMG' />
                    <small className='SmallText'>Все отзывы проходят модерацию в течение 2 часов</small>
                </div>
            </div>
        </div>
        </>
    )
}

export default Modal;