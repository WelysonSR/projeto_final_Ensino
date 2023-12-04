'use client'

import { deletGamesAxios, gamesAxios } from "@/util/axios";
import { useEffect, useState } from "react";

export function ListarJogos() {
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

  return (
    <section className="lista-jogos">
      <h1 className="lista-jogos-h1">Lista de Jogos</h1>
      <ul className="lista-jogos-ul">
        {
          games && games.map(({ id, nome }) => (
            <li key={id} className="lista-jogos-li">
              <p className="lista-jogos-p">{nome}</p>
              <span>
                <input className="lista-jogos-input" type="button" value="Editar" />
                <input className="lista-jogos-input" type="button" value="Excluir" onClick={() => delitGame(id)} />
              </span>
            </li>
          ))
        }
      </ul>
    </section>
  )
}