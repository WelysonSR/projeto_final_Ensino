import Image from "next/image";
import Link from "next/link";

export function Card({ image, name, text, caminho }) {
  return (
    <div className="carousel-item active">
      <Image className="cardImg" src={`/img/${image}.png`} width={50} height={50} alt={name} />
      <div className="carousel-caption d-none d-md-block">
        <h3 className="carousel-caption-h5">{name}</h3>
        <p className="carousel-caption-p" >{text}</p>
        <Link className="btn btn-primary" href={caminho}>
          Jogar
        </Link>
      </div>
    </div>
  )
}