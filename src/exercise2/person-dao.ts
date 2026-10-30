import { Person } from './person';

export class PersonDAO {
  save(_person: Person): void {}

  isValidToInclude(person: Person): string[] {
    const errors: string[] = [];
    if (!/^\p{L}+(?:\s+\p{L}+)+$/u.test(person.name)) {
      errors.push('Nome deve conter ao menos duas partes compostas por letras.');
    }
    if (!Number.isInteger(person.age) || person.age < 1 || person.age > 200) {
      errors.push('Idade deve estar entre 1 e 200.');
    }
    if (person.emails.length === 0) {
      errors.push('Pessoa deve possuir ao menos um e-mail.');
    }
    for (const email of person.emails) {
      if (!/^[^\s@.]+@[^\s@.]+(?:\.[^\s@.]+)+$/.test(email.name)) {
        errors.push(`E-mail inválido: ${email.name}.`);
      }
    }
    return errors;
  }
}
