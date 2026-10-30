export type TriangleType = 'escaleno' | 'isósceles' | 'equilátero' | 'inválido';

export function classifyTriangle(a: number, b: number, c: number): TriangleType {
  if (![a, b, c].every((side) => Number.isInteger(side) && side > 0)) return 'inválido';
  if (a + b <= c || a + c <= b || b + c <= a) return 'inválido';
  if (a === b && b === c) return 'equilátero';
  if (a === b || a === c || b === c) return 'isósceles';
  return 'escaleno';
}
