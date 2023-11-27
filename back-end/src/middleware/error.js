const erros = (err, _req, res, _next) => {
console.log('error', err)
  const [code, message] = err.message.split('|');

  if (code && message) {
    return res.status(Number(code)).json({ message });
  }

  console.log(err);
  return res.status(500)
    .json({ message: 'Internal server error' });
};

module.exports = erros;
