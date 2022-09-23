module.exports = (error, request, response, next) => {
  response.status(404).json({ error: 'Not found' });
}
