import React from 'react';
import { Link } from 'react-router-dom';
import './NoPages.scss';

const NotFoundPages = () => {
    return (
        <div className='notFoundBody'>
            <div class="mars">
            <div align="center">
                <Link class="btn-back" to={'/'}>Home page</Link>
            </div>
            </div>
            <img src="https://assets.codepen.io/1538474/404.svg" class="logo-404" />
            <img src="https://assets.codepen.io/1538474/meteor.svg" class="meteor" />
            <p class="title">Oh no!!</p>
            <p class="subtitle">
            Bu sahifa mavjud emas. Uzrimizni qabul qiling.<br />URL manzilni tekshirib qaytadan urinib ko'ring.
            </p>
            
            <img src="https://assets.codepen.io/1538474/astronaut.svg" class="astronaut" />
            <img src="https://assets.codepen.io/1538474/spaceship.svg" class="spaceship" />
        </div>
    );
}

export default NotFoundPages;
