import { Email } from '../../src/exercise2/email';
import { Person } from '../../src/exercise2/person';
import { PersonDAO } from '../../src/exercise2/person-dao';

describe('PersonDAO.isValidToInclude', () => {
  const dao = new PersonDAO();
  const validPerson = () => new Person(1, 'Ana Silva', 30, [new Email(1, 'ana@example.com')]);

  it('returns no errors for a valid person', () => {
    expect(dao.isValidToInclude(validPerson())).toEqual([]);
  });

  it.each(['', 'Ana', 'Ana Silva2', 'Ana 123', 'Ana Silva!'])('rejects invalid name %j', (name) => {
    const person = validPerson();
    person.name = name;
    expect(dao.isValidToInclude(person)).toContain('Nome deve conter ao menos duas partes compostas por letras.');
  });

  it.each([0, -1, 201])('rejects age %i outside [1, 200]', (age) => {
    const person = validPerson();
    person.age = age;
    expect(dao.isValidToInclude(person)).toContain('Idade deve estar entre 1 e 200.');
  });

  it.each([1, 200])('accepts boundary age %i', (age) => {
    const person = validPerson();
    person.age = age;
    expect(dao.isValidToInclude(person)).not.toContain('Idade deve estar entre 1 e 200.');
  });

  it('requires at least one associated email', () => {
    const person = validPerson();
    person.emails = [];
    expect(dao.isValidToInclude(person)).toContain('Pessoa deve possuir ao menos um e-mail.');
  });

  it.each(['', 'anaexample.com', '@example.com', 'ana@', 'ana@example', 'ana@@example.com', 'ana @example.com'])('rejects invalid email %j', (address) => {
    const person = validPerson();
    person.emails = [new Email(2, address)];
    expect(dao.isValidToInclude(person)).toContain(`E-mail inválido: ${address}.`);
  });

  it('validates every associated email', () => {
    const person = validPerson();
    person.emails = [new Email(2, 'ok@example.com'), new Email(3, 'bad')];
    expect(dao.isValidToInclude(person)).toContain('E-mail inválido: bad.');
  });

  it('returns all applicable errors', () => {
    const person = new Person(1, 'Ana', 201, [new Email(1, 'bad')]);
    expect(dao.isValidToInclude(person)).toEqual([
      'Nome deve conter ao menos duas partes compostas por letras.',
      'Idade deve estar entre 1 e 200.',
      'E-mail inválido: bad.',
    ]);
  });

  it('initializes an empty email list by default and supports save', () => {
    const person = new Person(2, 'João Silva', 25);
    expect(person.emails).toEqual([]);
    expect(() => dao.save(person)).not.toThrow();
  });
});
