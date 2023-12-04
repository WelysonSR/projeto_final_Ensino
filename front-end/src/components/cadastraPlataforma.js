'use client'

import { createPlataformaAxios, updatePlataformaAxios } from "@/util/axios";
import { useEffect, useState } from "react";

export function CadastrarPlataforma() {
  const [updatePlataforma, setUpdatePlataforma] = useState(null);
  const [nome, setNome] = useState('');

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
      if(nome === '') return alert('Preencha o campo nome')
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

  return (
    <form className="cj-form">
      <input
        type="text"
        value={nome}
        className="cj-input"
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite o nome do jogo"
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
  )
}