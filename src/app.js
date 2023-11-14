// const { emailTemplate } = require('./jsfoundation/01-template');
// require('./jsfoundation/02-destructiring')
// console.log(emailTemplate);
const { getUserById } = require('./jsfoundation/03-callbacks');

const id = 1;

getUserById(id, function (error, user1) {
  if (error) {
    throw new Error(error);
  }
  getUserById(2, function (error, user2) {
    if (error) {
      throw new Error(error);
    }
    console.log({ user1, user2 });
  });
});
