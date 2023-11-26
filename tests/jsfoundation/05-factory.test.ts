import { buildMakePerson } from '../../src/jsfoundation/05-factory';

describe('jsfoundation/05-factory', () => {
  const getUUIDPlugin = () => '1234';
  const getAgePlugin = () => 40;
  test('buildMakePerson should return a function', () => {
    const makePerson = buildMakePerson({ getUUIDPlugin, getAgePlugin });
    expect(typeof makePerson).toBe('function');
  });
  test('makePerson should return a person', () => {
    const makePerson = buildMakePerson({ getUUIDPlugin, getAgePlugin });
    const johnDoe = makePerson({ name: 'John Doe', birthdate: '1985-10-21' });
    expect(johnDoe).toEqual({
      id: '1234',
      name: 'John Doe',
      birthdate: '1985-10-21',
      age: 40,
    });
    console.log(johnDoe);
  });
});
