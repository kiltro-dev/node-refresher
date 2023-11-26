import { getUserById } from '../../src/jsfoundation/03-callbacks';

describe('jsfoundation/03-callbacks', () => {
  test('getuserById should return an error if user does not exist', (done) => {
    const id = 10;
    getUserById(id, (err, user) => {
      expect(err).toBe(`User not found with id ${id}`);
      expect(user).toBeUndefined();
      done();
    });
  });
  test('User name should be John Doe', (done) => {
    const id = 1;

    getUserById(id, (err, user) => {
      const { id, name } = user!;
      expect(err).toBeNull();
      expect(id).toBe(1);
      expect(name).toBe('John Doe');
      expect(user).toStrictEqual({ id: 1, name: 'John Doe' });
      done();
    });
  });
});
