'use client'

import { getPlataformaAxios } from "@/util/axios";
import { useEffect, useState } from "react"

export function CadastrarJogo() {
  const [platform, setPlatform] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getPlataformaAxios();
        setPlatform(result);
        // setUser(JSON.parse(localStorage.getItem('user')));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <form className="cj-form">
      <input
        type="text"
        className="cj-input"
        placeholder="Digite o nome do jogo"
      />
      <input
        type="text"
        className="cj-input"
        placeholder="Digite a categoria"
      />
      <select name="plataforma" className="cj-select select-cj">
        <option>Selecione Plataforma</option>
        {
          platform.map(({ id, nome }) => (
            <option key={id} value={nome}>{nome}</option>
          ))
        }
      </select>
      <input
        type="text"
        className="cj-input"
        placeholder="Digite uma nota"
      />
      <select name="status" className="cj-select select-cj">
        <option>Selecione Status</option>
        <option value="Jogando">Jogando</option>
        <option value="Jogado">Jogado</option>
        <option value="Zerado">Zerado</option>
        <option value="Outros">Outros</option>
      </select>
      <select name="recomendacao" className="cj-select select-cj">
        <option value="Sim">Sim</option>
        <option value="Não">Não</option>
      </select>
      <input
        type="button"
        value="Enviar"
        name="Enviar"
        className="cj-input-btn"
      />
    </form>
  )
}