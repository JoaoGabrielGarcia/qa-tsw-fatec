import { Position } from './position';

export function calculateNetSalary(baseSalary: number, position: Position): number {
  let discount: number;
  switch (position) {
    case Position.DEVELOPER:
      discount = baseSalary >= 3000 ? 0.2 : 0.1;
      break;
    case Position.DBA:
    case Position.TESTER:
      discount = baseSalary >= 2000 ? 0.25 : 0.15;
      break;
    case Position.MANAGER:
      discount = baseSalary >= 5000 ? 0.3 : 0.2;
      break;
  }
  return baseSalary * (1 - discount!);
}
