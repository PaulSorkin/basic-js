const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  function redDog() {
    if (email.includes('@')) {
      email = email.slice(email.indexOf('@') + 1);
      redDog();
    }
    return email;
  }
  redDog();
  return email;
}

module.exports = {
  getEmailDomain
};

getEmailDomain('very.unusual.@.unusual.com@usual.com')