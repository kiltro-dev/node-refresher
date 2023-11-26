interface User {
  id: number;
  name: string;
}

type Callback = (error?: string | null, user?: User) => void;

const users: User[] = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
];

export function getUserById(id: number, callback: Callback) {
  const user = users.find(function (user) {
    return user.id === id;
  });

  if (!user) {
    setTimeout(() => {
      callback(`User not found with id ${id}`);
    }, 1);
    return;
  }
  return callback(null, user);
}
