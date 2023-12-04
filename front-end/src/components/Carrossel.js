'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Carrossel() {
  const [cssActive_1, setCssActive_1] = useState('active')
  const [cssActive_2, setCssActive_2] = useState('')
  const [cssActive_3, setCssActive_3] = useState('')

  useEffect(() => {
    setTimeout(() => {
      if (cssActive_1 === 'active') {
        setCssActive_2('active')
        setCssActive_1('')
      }
      if (cssActive_2 === 'active') {
        setCssActive_3('active')
        setCssActive_2('')
      }
      if (cssActive_3 === 'active') {
        setCssActive_1('active')
        setCssActive_3('')
      }
    }, 7000)
  }, [cssActive_1, cssActive_2, cssActive_3])

  const nextSlide = () => {
    if (cssActive_1 === 'active') {
      setCssActive_2('active')
      setCssActive_1('')
    }
    if (cssActive_2 === 'active') {
      setCssActive_3('active')
      setCssActive_2('')
    }
    if (cssActive_3 === 'active') {
      setCssActive_1('active')
      setCssActive_3('')
    }
  }

  const prevSlide = () => {
    if (cssActive_1 === 'active') {
      setCssActive_3('active')
      setCssActive_1('')
    }
    if (cssActive_2 === 'active') {
      setCssActive_1('active')
      setCssActive_2('')
    }
    if (cssActive_3 === 'active') {
      setCssActive_2('active')
      setCssActive_3('')
    }
  }

  return (
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className={`carousel-item ${cssActive_1}`}>
          <img src="/img/the-witcher-jogo.png" className="d-block w-100 carousel-img" alt="The Witcher" />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="carousel-caption-h5">The Witcher</h5>
            <p className="carousel-caption-p">Você é Geralt de Rívia, mercenário matador de monstros. O lugar é um continente devastado pela guerra e infestado de monstros que você pode explorar à vontade. Seu contrato atual? Encontrar Ciri, a Criança da Profecia — uma arma viva que pode alterar a forma do mundo.</p>
            <Link className="btn btn-primary" target="_blank" href="https://www.thewitcher.com/us/pt-br/">
              Jogar
            </Link>
          </div>
        </div>

        <div className={`carousel-item ${cssActive_2}`}>
          <img src="/img/rdr2.png" className="d-block w-100 carousel-img" alt="Red Dead Redemption 2" />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="carousel-caption-h5">Red Dead Redemption 2</h5>
            <p className="carousel-caption-p">É um jogo eletrônico de ação-aventura desenvolvido pela  Rockstar Studios  e publicado pela  Rockstar Games. É uma prequela  de  Red Dead Redemption  de 2010, sendo o terceiro título da franquia  Red Dead. O enredo centra-se no bandido Arthur Morgan, um dos principais membros da gangue Van der Linde.</p>
            <Link className="btn btn-primary" target="_blank" href="https://www.rockstargames.com/reddeadredemption2/">
              Jogar
            </Link>
          </div>
        </div>

        <div className={`carousel-item ${cssActive_3}`}>
          <img src="/img/cod.png" className="d-block w-100 carousel-img" alt="Call of Duty" />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="carousel-caption-h5">CALL OF DUTY</h5>
            <p className="carousel-caption-p">Call of Duty é um jogo eletrônico de tiro em primeira pessoa desenvolvido pela Infinity Ward e publicado pela Activision. Foi lançado em 29 de outubro de 2003 para Microsoft Windows.</p>
            <Link className="btn btn-primary" target="_blank" href="https://www.callofduty.com/br/pt">
              Jogar
            </Link>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
        onClick={prevSlide}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
        onClick={nextSlide}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Próximo</span>
      </button>
    </div>
  );
};
