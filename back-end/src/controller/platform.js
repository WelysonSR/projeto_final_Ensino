const platformService = require('../service/platform');

async function insertPlatform(req, res) {
  await platformService.insertPlatform(req.body);
  res.status(200).json({ message: 'Plataforma adicionado com sucesso!' });
}

async function updatePlatform(req, res) {
  await platformService.updatePlatform(req.params.id, req.body);
  res.status(200).json({ message: 'Plataforma atualizado com sucesso!' });
}

async function deletePlatform(req, res) {
  await platformService.deletePlatform(req.params.id);
  res.status(200).json({ message: 'Plataforma deletado com sucesso!' });
}

async function getAllPlatform(_req, res) {
  const result = await platformService.getAllPlatform();
  res.status(200).json(result);
}

module.exports = {
  insertPlatform,
  updatePlatform,
  deletePlatform,
  getAllPlatform
}