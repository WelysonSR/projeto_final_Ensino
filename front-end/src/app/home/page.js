'use client'

import { Card } from "@/components/card";
import NavBarHome from "@/components/navBarHome";
import { gamesAxios } from "@/util/axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [games, setGames] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await gamesAxios();
        setGames(result);
        setUser(JSON.parse(localStorage.getItem('user')));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <NavBarHome />
      <div className="home-section">
        {games.map(({ id, cat, nome, nota, plataforma_disp, recomendacao, status }) => (
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
        ))}
      </div>
    </section>
  );
}
