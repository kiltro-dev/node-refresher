import { getAgePlugin } from '../../src/plugins';

describe('getAgePlugin', () => {
  test('should return the age of a person', () => {
    const birthdate = '1985-10-21';
    const age = getAgePlugin(birthdate);
    expect(typeof age).toBe('number');
  });

  test('should return current age', () => {
    const birthdate = '1985-10-21';
    const age = getAgePlugin(birthdate);

    const calculatedAge =
      new Date().getFullYear() - new Date(birthdate).getFullYear();

    expect(age).toBe(calculatedAge);
  });

  test('should return 0 years', () => {
    const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);
    const birthdate = '1995-10-21';
    const age = getAgePlugin(birthdate);
    expect(age).toBe(0);
    expect(spy).toHaveBeenCalled();
  });
});
