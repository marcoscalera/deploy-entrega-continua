const saudar = require('../src/app');

test('deve retornar a saudação com o nome correto', () => {
  expect(saudar('Marcos')).toBe('Olá, Marcos!');
});