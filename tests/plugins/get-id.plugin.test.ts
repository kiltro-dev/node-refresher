import { getUUIDPlugin } from '../../src/plugins';

describe('getUUIDPlugin', () => {
  test('should return a string', () => {
    const uuid = getUUIDPlugin();
    expect(typeof uuid).toBe('string');
    expect(uuid.length).toBe(36);
  });
});
