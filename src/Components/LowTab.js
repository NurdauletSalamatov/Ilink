import React, {Component} from 'react';
import logo from './logo.png';
import logos from './logos.png'
import './LowTab.css'

export default class Header extends Component {
    render() {
        return (
            <nav class="navbarlow navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src={logo} alt="" width="40" height="40" class="d-inline-block align-text-top" />
                            Саламатов Нурдаулет
                    </a>
                    <ul class="nav justify-content-center">
                    <img src={logos} alt="" width="85.43px" height="52px" class="d-inline-block align-text-top"/>
                    </ul>
                    <ul class="nav nav-pills justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Панель управления</a>
                    </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

