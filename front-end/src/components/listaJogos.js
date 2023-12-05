'use client'

import { deletGamesAxios, gamesAxios } from "@/util/axios";
import { useEffect, useState } from "react";
import { CadastrarJogo } from "./cadastraJogo";

export function ListarJogos() {
  const [render, setRender] = useState(true)
  const [games, setGames] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await gamesAxios();
        setGames(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [games])

  const delitGame = async (id) => {
    try {
      const result = await deletGamesAxios(id);
      if (result) alert(result);
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  const addUser = async () => {
    localStorage.removeItem('game')
    setRender(false)
  }

  const updateGame = (game) => {
    localStorage.setItem('game', JSON.stringify(game))
    setRender(false)
  }

  return (
    <section className="lista-jogos">
      <div className="lista-jogos-title">
        <h1 className="lista-jogos-h1" onClick={() => setRender(true)}>Lista</h1>
        <img src="/img/botao-adicionar.png" onClick={addUser} width={35} alt="Adicionar usuario" />
      </div>
      {
        render ?
        <ul className="lista-jogos-ul">
        {
          games && games.map((game) => (
            <li key={game.id} className="lista-jogos-li">
              <p className="lista-jogos-p">{game.nome}</p>
              <span>
                <input className="lista-jogos-input" type="button" value="Editar" onClick={() => updateGame(game)} />
                <input className="lista-jogos-input" type="button" value="Excluir" onClick={() => delitGame(game.id)} />
              </span>
            </li>
          ))
        }
      </ul> :
        <CadastrarJogo />
      }
    </section>
  )
}