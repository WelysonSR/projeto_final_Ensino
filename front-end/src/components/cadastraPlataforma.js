'use client'

import { addJogoPlataformaAxios, createPlataformaAxios, deletJogosPlataformaAxios, gamesAxios, getJogosPlataformaAxios, getPlataformaAxios, updatePlataformaAxios } from "@/util/axios";
import { useEffect, useState } from "react";

export function CadastrarPlataforma() {
  const [updatePlataforma, setUpdatePlataforma] = useState(null);
  const [nome, setNome] = useState('');
  const [plataformaJogo, setPlataformaJogo] = useState([])
  const [jogoPlataforma, setJogoPlataforma] = useState([])
  const [idPlatform, getIdPlataforma] = useState('')
  const [idGame, getIdJogo] = useState('')
  const [listGame, setListGame] = useState([])
  const [render, setRender] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const games = await gamesAxios()
      const platform = await getPlataformaAxios()
      setJogoPlataforma(games)
      setPlataformaJogo(platform)
    };

    fetchData();
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      setUpdatePlataforma(JSON.parse(localStorage.getItem('plataforma')));
    };
    fetchData();
  }, [])

  useEffect(() => {
    const setInfo = () => {
      setNome(updatePlataforma.nome)
    }
    if (updatePlataforma) setInfo()
  }, [updatePlataforma]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await createPlataformaAxios({ nome })
      setUpdatePlataforma(JSON.parse(localStorage.getItem('plataforma')));
      if (result) alert(result)
    } catch (error) {
      alert(error.response.data.message)
    }
  };

  const newUpdatePlataforma = async (e) => {
    e.preventDefault();
    try {
      if (nome === '') return alert('Preencha o campo nome')
      const result = await updatePlataformaAxios(updatePlataforma.id, { nome })
      if (result) {
        setNome('');
        alert(result.message);
      }
      setNome('');
      localStorage.removeItem('plataforma');
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const listGamePlataforma = await getJogosPlataformaAxios(idPlatform)
      console.log(listGamePlataforma);
      setRender(false)
      setListGame(listGamePlataforma)
    };
    if (idPlatform) fetchData();
  }, [idPlatform])

  useEffect(() => {
    const fetchData = async () => {
      const game = listGame.find(g => g.id === Number(idGame));
      if (game) setRender(true)
    };
    if (idPlatform) fetchData();
  }, [idGame])

  const adicionarJogo = async () => {
    try {
      const result = await addJogoPlataformaAxios({ idGame, idPlatform })
      if (result) alert(result)
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  const deletarJogo = async () => {
    console.log('Deletar jogo da plataforma');
    try {
      const result = await deletJogosPlataformaAxios({ idGame, idPlatform })
      if (result) alert(result)
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  return (
    <section>
      <form className="cj-form">
        <input
          type="text"
          value={nome}
          className="cj-input"
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite o nome da plataforma"
        />
        {
          updatePlataforma ?
            <input
              type="submit"
              value="Atualizar"
              name="Atualizar"
              className="cj-input-btn"
              onClick={newUpdatePlataforma}
            />
            : <input
              type="submit"
              value="Enviar"
              name="Enviar"
              className="cj-input-btn"
              onClick={handleSubmit}
            />
        }
      </form>
      <div>
        <h1 className="lista-jogos-h1 margin-top-20px">
          Adicionar Jogo a Plataforma
        </h1>
        <form className="cj-form">
          <select
            name="plataforma"
            className="cj-select select-cj"
            value={idPlatform}
            onChange={(e) => getIdPlataforma(e.target.value)}
          >
            <option>Selecione Plataforma</option>
            {plataformaJogo.map(({ id, nome }) => (
              <option key={id} value={id}>
                {nome}
              </option>
            ))}
          </select>
          <select
            name="plataforma"
            className="cj-select select-cj"
            value={idGame}
            onChange={(e) => getIdJogo(e.target.value)}
          >
            <option>Selecione Jogo</option>
            {jogoPlataforma.map(({ id, nome }) => (
              <option key={id} value={id}>
                {nome}
              </option>
            ))}
          </select>
          {
            render ?
              <input
                type="button"
                value="Deletar"
                className="cj-input-btn"
                onClick={deletarJogo}
              /> :
              <input
                type="button"
                value="Adicionar"
                className="cj-input-btn"
                onClick={adicionarJogo}
              />
          }
        </form>
      </div>
      <ul className="lista-jogos-ul">
        {
          listGame && listGame.map((game) => (
            <li key={game.id} className="lista-jogos-li">
              <p className="lista-jogos-p">{game.nome}</p>
            </li>
          ))
        }
      </ul>
    </section>
  )
}