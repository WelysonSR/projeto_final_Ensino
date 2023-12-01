'use client'

import { CadastrarJogo } from "@/components/cadastraJogo"
import { CadastrarPlataforma } from "@/components/cadastraPlataforma"
import NavBarHome from "@/components/navBarHome"
import { useState } from "react"

export default function Cadastro() {
  const [render, setRender] = useState(true)

  return (
    <main>
      <NavBarHome />
      {
        render ? <CadastrarJogo /> : <CadastrarPlataforma />
      }
    </main>
  )
}