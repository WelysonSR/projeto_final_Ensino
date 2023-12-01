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
          <img src="/img/free-fire.png" className="d-block w-100 carousel-img" alt="Free Fire" />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="carousel-caption-h5">FREE FIRE</h5>
            <p className="carousel-caption-p">É um jogo de tiro e sobrevivência mundialmente famoso disponível no celular. Cada partida dura cerca de 10 minutos e te coloca em uma ilha para enfrentar 49 jogadores na luta pela sobrevivência.</p>
            <Link className="btn btn-primary" target="_blank" href="https://ff.garena.com/pt/">
              Jogar
            </Link>
          </div>
        </div>

        <div className={`carousel-item ${cssActive_2}`}>
          <img src="/img/league-of-legends.png" className="d-block w-100 carousel-img" alt="League of Legends" />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="carousel-caption-h5">LEAGUE OF LEGENDS</h5>
            <p className="carousel-caption-p">É um jogo de estratégia em que duas equipes de cinco poderosos campeões se enfrentam para destruir a base uma da outra. Escolha entre mais de 140 campeões para realizar jogadas épicas.</p>
            <Link className="btn btn-primary" target="_blank" href="https://www.leagueoflegends.com/pt-br/">
              Jogar
            </Link>
          </div>
        </div>

        <div className={`carousel-item ${cssActive_3}`}>
          <img src="/img/call-of-duty.png" className="d-block w-100 carousel-img" alt="Call of Duty" />
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
