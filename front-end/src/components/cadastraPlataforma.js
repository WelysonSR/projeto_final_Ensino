'use client'

import { createPlataformaAxios } from "@/util/axios";
import { useState } from "react";

export function CadastrarPlataforma() {
  const [nome, setNome] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newJogo = { nome }
      const result = await createPlataformaAxios(newJogo)
      if(result) alert(result)
    } catch (error) {
      alert('Error ao cadastrar o jogo')
    }
  };

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
        type="submit"
        value="Enviar"
        name="Enviar"
        className="cj-input-btn"
        onClick={handleSubmit}
      />
    </form>
  )
}