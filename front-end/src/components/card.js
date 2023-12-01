export function Card({ userId, id, cat, nome, nota, plataforma_disp, recomendacao, status }) {
  const addGames = async() =>{
    await addGamesAxios({ userId, jogoId: id })
  }

  return (
    <div>
      <h3>{nome}</h3>
      <p>{cat}</p>
      <p>{nota}</p>
      <p>{plataforma_disp}</p>
      <p>{recomendacao}</p>
      <p>{status}</p>
      <button onClick={addGames}>
        Adicionar
      </button>
    </div>
  )
}