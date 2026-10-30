import { classifyTriangle } from '../../src/exercise1/triangle';

describe('classifyTriangle', () => {
  it.each([[4, 5, 6], [5, 4, 6], [6, 5, 4]])('classifies scalene triangle %s, %s, %s', (...sides) => {
    expect(classifyTriangle(...sides)).toBe('escaleno');
  });

  it.each([[5, 5, 6], [5, 6, 5], [6, 5, 5]])('classifies isosceles triangle %s, %s, %s', (...sides) => {
    expect(classifyTriangle(...sides)).toBe('isósceles');
  });

  it('classifies equilateral triangle', () => {
    expect(classifyTriangle(5, 5, 5)).toBe('equilátero');
  });

  it.each([[0, 2, 2], [2, 0, 2], [2, 2, 0]])('rejects a zero side %s, %s, %s', (...sides) => {
    expect(classifyTriangle(...sides)).toBe('inválido');
  });

  it.each([[-1, 3, 3], [3, -1, 3], [3, 3, -1]])('rejects a negative side %s, %s, %s', (...sides) => {
    expect(classifyTriangle(...sides)).toBe('inválido');
  });

  it.each([[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]])('rejects degenerate triangle %s, %s, %s', (...sides) => {
    expect(classifyTriangle(...sides)).toBe('inválido');
  });

  it.each([[1, 2, 4], [1, 4, 2], [2, 1, 4], [2, 4, 1], [4, 1, 2], [4, 2, 1]])('rejects impossible triangle %s, %s, %s', (...sides) => {
    expect(classifyTriangle(...sides)).toBe('inválido');
  });

  it('rejects three zero sides', () => {
    expect(classifyTriangle(0, 0, 0)).toBe('inválido');
  });
});

