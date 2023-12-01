import Image from "next/image";
import Link from "next/link";

export function Card({image, name, text, caminho}) {
    return (
        <div className="gameCard">
            <Image className="cardImg" src={`/img/${image}.png`} width={50} height={50} alt={name} />
            <h3 className="cardH3" >{name}</h3>
            <p className="cardP" >{text}</p>
            <Link className="cardA"  href={caminho}>Jogar</Link>
        </div>
    )
}