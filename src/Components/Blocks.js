
import React, { useState} from 'react';
import './Blocks.css'
import PlusButton from './PlusButton.png';
import Modal from './Window.js'

const Blocks = () => {
    var Block = document.getElementById('myModal');
         return (
            <div>
                <h1 className='TextH'>Отзывы</h1>
                <button className='AnswerButton' onClick={Block}>
                <img src={PlusButton} alt="" className=''/>
                <p className='TextAnswer'>Добавить отзыв</p>
                </button>            
            </div>
        )
    }

export default Blocks;
