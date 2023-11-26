import { characters } from '../../src/jsfoundation/02-destructiring';

describe('jsfoundation/02-destructuring.ts', () => {
  test('characteres should contain Flash, Superman', () => {
    expect(characters).toContain('Flash');
    expect(characters).toContain('Superman');
  });

  test('First character should be Frash and second should be Superman', () => {
    const [flash, superman] = characters;
    expect(flash).toBe('Flash');
    expect(superman).toBe('Superman');
  });
});
