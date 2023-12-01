'use client'

import { Card } from "@/components/card";
import NavBarHome from "@/components/navBarHome";
import { gamesAxios } from "@/util/axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [games, setGames] = useState([])
  const [user, setUser] = useState({})

  console.log(`Front: ${typeof games} ${games}`)

  useEffect(() => {
    const getGames = async () => {
      const result = await gamesAxios()
      return result
    }
    setGames(getGames())
    setUser(JSON.parse(localStorage.getItem('user')))
  }, [])

  return (
    <section>
      <NavBarHome />
      {
        games.map(({ id, cat, nome, nota, plataforma_disp, recomendacao, status }) => (
          <Card
            key={id}
            userId={user.id}
            id={id}
            cat={cat}
            nome={nome}
            nota={nota}
            plataforma_disp={plataforma_disp}
            recomendacao={recomendacao}
            status={status}
          />
        ))
      }
    </section>
  )
}