import { removeGamesAxios } from "@/util/axios";

export function CardBiblioteca({ userId, id, cat, nome, nota, plataforma_disp, recomendacao, status }) {
  const removeGames = async () => {
    try {
      const response = await removeGamesAxios({ userId, jogoId: id });
      if (response) alert(response);
    } catch (error) {
      alert('Ocorreu um erro ao adicionar o jogo à biblioteca.')
    }
  };

  return (
    <div className="card-div">
      <h3 className="card-h3">{nome}</h3>
      <p className="card-p">{cat}</p>
      <p className="card-p">{nota}</p>
      <p className="card-p">{plataforma_disp}</p>
      <p className="card-p">{recomendacao}</p>
      <p className="card-p">{status}</p>
      <button className="card-button" onClick={removeGames}>
        Remover
      </button>
    </div>
  );
}