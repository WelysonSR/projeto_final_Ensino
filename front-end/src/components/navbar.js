import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="nav">
      <div className="nav-div nav-logo">
        <Link className="nav-logo-link" href="/">
          <Image src="/img/logo.png" width={40} height={40} alt="Logo" />
        </Link>
      </div>
      <div className="nav-div">
        <ul className="nav-ul">
          <li className="nav-li nav-li-link:hover"><Link className="nav-li-link" href="/noticias">Noticias</Link></li>
          <li className="nav-li nav-li-link:hover"><Link className="nav-li-link" href="/comunidade">Comunidade</Link></li>
          <li className="nav-li nav-li-link:hover"><Link className="nav-li-link" href="/sobre">Sobre Nós</Link></li>
          <li className="nav-li nav-li-link:hover"><Link className="nav-li-link" href="/login">Login</Link></li>
          <li className="nav-li nav-li-link:hover"><Link className="nav-li-link" href="/cadastro">Criar Conta</Link></li>
        </ul>
      </div>
    </nav>
  )
}