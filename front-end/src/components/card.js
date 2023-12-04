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
      <h3 className="card-h3"> {nome}</h3>
      <p className="card-p"><span className="span_card">Categoria:</span>{cat}</p>
      <p className="card-p"><span className="span_card">Nota:</span>{nota}</p>
      <p className="card-p"><span className="span_card">Plataforma Disp:</span>{plataforma_disp}</p>
      <p className="card-p"><span className="span_card">Recomendação:</span>{recomendacao}</p>
      <p className="card-p"><span className="span_card">Status:</span>{status}</p>
      <button className="card-button" onClick={addGames}>
        Adicionar
      </button>
    </div>
  );
}