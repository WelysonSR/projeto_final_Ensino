'use client'

import { ListarJogos } from "@/components/listaJogos"
import { ListaPlataforma } from "@/components/listaPlataforma"
import NavBarHome from "@/components/navBarHome"
import { useState } from "react"

export default function Cadastro() {
  const [render, setRender] = useState(true)

  return (
    <main>
      <NavBarHome />
      <div className="cadastro-main">
        <div className="cadastro-div">
          <span className="cadastro-span" onClick={() => setRender(true)}>Jogo</span>
          <span className="cadastro-span" onClick={() => setRender(false)}>Plataforma</span>
        </div>
        {
          render ? <ListarJogos /> : <ListaPlataforma />
        }
      </div>
    </main>
  )
}