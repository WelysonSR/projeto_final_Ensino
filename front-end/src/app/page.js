import Carrossel from '@/components/Carrossel';
import Link from "next/link";

const cards = [{
  img: 'free-fire',
  name: 'FREE FIRE',
  text: 'É um jogo de tiro e sobrevivência mundialmente famoso disponível no celular. Cada partida dura cerca de 10 minutos e te coloca em uma ilha para enfrentar 49 jogadores na luta pela sobrevivência.',
  link: 'https://ff.garena.com/pt/'
},
{
  img: 'league-of-legends',
  name: 'LEAGUE OF LEGENDS',
  text: 'É um jogo de estratégia em que duas equipes de cinco poderosos campeões se enfrentam para destruir a base uma da outra. Escolha entre mais de 140 campeões para realizar jogadas épicas.',
  link: 'https://www.leagueoflegends.com/pt-br/'
},
{
  img: 'call-of-duty',
  name: 'CALL OF DUTY',
  text: 'Call of Duty é um jogo eletrônico de tiro em primeira pessoa desenvolvido pela Infinity Ward e publicado pela Activision. Foi lançado em 29 de outubro de 2003 para Microsoft Windows.',
  link: 'https://www.callofduty.com/br/pt'
}]

export default function Home() {
  return (
    <main>
      <Link href="./login">Login</Link>
      <Carrossel />
    </main>
  )
}
