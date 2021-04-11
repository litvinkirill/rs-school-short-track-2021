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
  const index = email.indexOf('@');
  const result = email.substr(index + 1);
  if (result.includes('@')) {
    const ind = result.indexOf('@');
    const res = result.substr(ind + 1);
    return res;
  }
  return result;
}

module.exports = getEmailDomain;
