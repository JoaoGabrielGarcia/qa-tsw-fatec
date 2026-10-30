import { calculateNetSalary } from '../../src/exercise3/salary';
import { Position } from '../../src/exercise3/position';

describe('calculateNetSalary', () => {
  it.each([
    [Position.DEVELOPER, 3000, 2400],
    [Position.DEVELOPER, 2999, 2699.1],
    [Position.DBA, 2000, 1500],
    [Position.DBA, 1999, 1699.15],
    [Position.TESTER, 2000, 1500],
    [Position.TESTER, 1999, 1699.15],
    [Position.MANAGER, 5000, 3500],
    [Position.MANAGER, 4999, 3999.2],
  ])('calculates %s salary at %s', (position, salary, expected) => {
    expect(calculateNetSalary(salary, position)).toBeCloseTo(expected, 2);
  });
});
