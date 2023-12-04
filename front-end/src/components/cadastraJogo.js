'use client'

import { createJogoAxios, getPlataformaAxios, updateGamesAxios } from "@/util/axios";
import { useEffect, useState } from "react"

export function CadastrarJogo() {
  const [platform, setPlatform] = useState([]);
  const [updateGame, setUpdateGame] = useState(null);
  const [nome, setNome] = useState('');
  const [cat, setCat] = useState('');
  const [plataforma_que, setPlataforma_que] = useState('');
  const [nota, setNota] = useState('');
  const [status, setStatus] = useState('');
  const [recomendacao, setRecomendacao] = useState('Sim');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getPlataformaAxios();
        setPlatform(result);
        setUpdateGame(JSON.parse(localStorage.getItem('game')));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const setInfo = () => {
      setNome(updateGame.nome)
      setCat(updateGame.cat)
      setPlataforma_que(updateGame.plataforma_disp)
      setNota(updateGame.nota)
      setStatus(updateGame.status)
      setRecomendacao(updateGame.recomendacao)
    }
    if (updateGame) setInfo()
  }, [updateGame]);

  const limparinputi = () => {
    setNome('')
    setCat('')
    setPlataforma_que('')
    setNota('')
    setStatus('')
    setRecomendacao('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newJogo = { nome, cat, plataforma_que, nota, status, recomendacao }
      const result = await createJogoAxios(newJogo)
      if (result) {
        limparinputi();
        alert(result);
      }
    } catch (error) {
      alert(error.response.data.message)
    }
  };

  const newUpdateGame = async (e) => {
    e.preventDefault();
    try {
      const newJogo = { nome, cat, plataforma_que, nota, status, recomendacao }
      const result = await updateGamesAxios(updateGame.id, newJogo)
      if (result) {
        limparinputi();
        alert(result.message);
      }
      limparinputi();
      localStorage.removeItem('game');
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  return (
    <form className="cj-form">
      <input
        type="text"
        value={nome}
        className="cj-input"
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite o nome do jogo"
      />
      <input
        type="text"
        value={cat}
        className="cj-input"
        onChange={(e) => setCat(e.target.value)}
        placeholder="Digite a categoria"
      />
      <select
        name="plataforma"
        className="cj-select select-cj"
        value={plataforma_que}
        onChange={(e) => setPlataforma_que(e.target.value)}
      >
        <option>Selecione Plataforma</option>
        {platform.map(({ id, nome }) => (
          <option key={id} value={nome}>
            {nome}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={nota}
        className="cj-input"
        onChange={(e) => setNota(e.target.value)}
        placeholder="Digite uma nota"
      />
      <select
        name="status"
        value={status}
        className="cj-select select-cj"
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>Selecione Status</option>
        <option value="Jogando">Jogando</option>
        <option value="Jogado">Jogado</option>
        <option value="Zerado">Zerado</option>
        <option value="Outros">Outros</option>
      </select>
      <select
        name="recomendacao"
        value={recomendacao}
        className="cj-select select-cj"
        onChange={(e) => setRecomendacao(e.target.value)}
      >
        <option value="Sim">Sim</option>
        <option value="Não">Não</option>
      </select>
      {
        updateGame ? <input
          type="submit"
          value="Atualizar"
          name="Atualizar"
          className="cj-input-btn"
          onClick={newUpdateGame}
        /> :
          <input
            type="submit"
            value="Enviar"
            name="Enviar"
            className="cj-input-btn"
            onClick={handleSubmit}
          />
      }
    </form>
  );
}