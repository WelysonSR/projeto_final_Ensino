'use client'

import { deletPlataformaAxios, getPlataformaAxios } from "@/util/axios"
import { useEffect, useState } from "react"
import { CadastrarPlataforma } from "./cadastraPlataforma"

export function ListaPlataforma() {
  const [render, setRender] = useState(true)
  const [plataforma, setPlataforma] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getPlataformaAxios();
        setPlataforma(result);
      } catch (error) {
        console.error(error.response.data.message);
      }
    };

    fetchData();
  }, [plataforma])

  const addUser = async () => {
    localStorage.removeItem('plataforma')
    setRender(false)
  }

  const updatePlataforma = async (plataforma) => {
    localStorage.setItem('plataforma', JSON.stringify(plataforma))
    setRender(false)
  }

  const delitPlataforma = async (id) => {
    try {
      const result = await deletPlataformaAxios(id);
      if (result) alert(result);
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  return (
    <section className="lista-jogos">
      <div className="lista-jogos-title">
        <h1 className="lista-jogos-h1" onClick={() => setRender(true)}>Lista</h1>
        <img src="/img/botao-adicionar.png" onClick={addUser} width={35} alt="Adicionar plataforma" />
      </div>
      {
        render ?
          <ul className="lista-jogos-ul">
            {
              plataforma && plataforma.map((plataforma) => (
                <li key={plataforma.id} className="lista-jogos-li">
                  <p className="lista-jogos-p">{plataforma.nome}</p>
                  <span>
                    <input className="lista-jogos-input" type="button" value="Editar" onClick={() => updatePlataforma(plataforma)} />
                    <input className="lista-jogos-input" type="button" value="Excluir" onClick={() => delitPlataforma(plataforma.id)} />
                  </span>
                </li>
              ))
            }
          </ul> :
          <CadastrarPlataforma />
      }
    </section>
  )
}