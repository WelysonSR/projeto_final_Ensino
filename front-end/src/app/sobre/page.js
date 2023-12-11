import NavBar from "@/components/navbar";
import Link from "next/link";

export default function Sobre() {
  return (
    <section>
      <NavBar />
      <div className="sobre">
        <h1 className="sobre-h1">Quem somos nós?</h1>

        <p className="sobre-p" >Somos 5 universitários que temos como objetivo levar entretenimento para os usuários por meio deste site. Estamos sempre em busca de conhecimento sobre o assunto, portanto, nosso objetivo é sempre estar aprendendo. Temos como sonho desenvolver, não só pelo salário ser ótimo (vale lembrar, haha) mas também pelo fato de sermos apaixonados pela área de TI. Gostamos muito de jogos, é ai que entra o questionamento.. Será que seremos não apenas desenvolvedores de sites, mas também desenvolvedores de jogos? Acompanhe os próximos capitulos ;). </p>
        <h2> Siga nossas redes sociais</h2>
        <div className="icons" >
          <Link href="https://twitter.com/DevGames2023"><img src="/img/x.png" /></Link>
          <Link href="https://discord.gg/c9rjMdnY"><img src="/img/discord.png" /></Link>
          <Link href="#"><img src="/img/instagram.png" /></Link>
          <Link href="https://www.facebook.com/profile.php?id=61554469493000"><img src="/img/facebook.png" /></Link>
          <Link href="https://github.com/DevGames2023"><img src="/img/github.png" /></Link>
        </div>
      </div>
    </section>
  )
}