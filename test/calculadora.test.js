import { somaCalculadora,
         subtracaoCalculadora,
         multiplicacaoCalculadora,
         divisaoCalculadora } from "../index.js"

describe('Testes da Calculadora', () => {
  it('Deve retornar a soma de 2 valores', () => {
    const esperado = 30;
    const retornado = somaCalculadora(10, 20)
    expect(retornado).toBe(esperado)
  })

  it('Deve retornar a subtração entre 2 valores', () => {
    const esperado = 20;
    const retornado = subtracaoCalculadora(30, 10)
    expect(retornado).toBe(esperado)
  })

  it('Deve retornar a multiplicação entre 2 valores', () => {
    const esperado = 200;
    const retornado = multiplicacaoCalculadora(20, 10)
    expect(retornado).toBe(esperado)
  })

  it('Deve retornar a divisão entre 2 valores', () => {
    const esperado = 50;
    const retornado = divisaoCalculadora(150, 3)
    expect(retornado).toBe(esperado)
  })
})