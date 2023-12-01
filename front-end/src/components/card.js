import { addGamesAxios } from "@/util/axios";

export function Card({ userId, id, cat, nome, nota, plataforma_disp, recomendacao, status }) {
  const addGames = async () => {
    console.log('Clicado');
    try {
      const response = await addGamesAxios({ userId, jogoId: id });
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
      <button className="card-button" onClick={addGames}>
        Adicionar
      </button>
    </div>
  );
}