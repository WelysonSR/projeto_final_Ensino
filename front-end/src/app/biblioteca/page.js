'use client'

import { CardBiblioteca } from "@/components/cardBiblioteca";
import NavBarHome from "@/components/navBarHome";
import { gatGamesAxios } from "@/util/axios";
import { useEffect, useState } from "react";

export default function Biblioteca() {
  const [games, setGames] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUser(user)
  }, [])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await gatGamesAxios(user.id);
        setGames(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [user.id, games]);

  return (
    <main>
      <NavBarHome />
      <div className="home-section">
        {games.map(({ id, cat, nome, nota, plataforma_disp, recomendacao, status }) => (
          <CardBiblioteca
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
        ))}
      </div>
    </main>
  );
}
