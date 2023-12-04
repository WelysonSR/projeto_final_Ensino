'use client'

import { createJogoAxios, getPlataformaAxios } from "@/util/axios";
import { useEffect, useState } from "react"
import { ListarJogos } from "./listaJogos";

export function CadastrarJogo() {
  const [platform, setPlatform] = useState([]);
  const [user, setUser] = useState('');
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
        setUser(JSON.parse(localStorage.getItem('user')));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newJogo = { nome, cat, plataforma_que, nota, status, recomendacao }
      const result = await createJogoAxios(newJogo)
      if (result) alert(result)
    } catch (error) {
      alert(error.response.data.message)
    }
  };

  return (
    <section>
      <form className="cj-form" onSubmit={handleSubmit}>
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
        <input
          type="submit"
          value="Enviar"
          name="Enviar"
          className="cj-input-btn"
          onClick={handleSubmit}
        />
      </form>

      <ListarJogos />
    </section>
  );
}