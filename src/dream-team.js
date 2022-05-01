const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (members == null) {
    return false
  } else {
    let resArr = [];
    for (let i=0; i<members.length; i++) {
      if (typeof members[i] === 'string') {
        resArr.push(members[i].toUpperCase());
      }
    }
  
    if (resArr === []) {
      return false;
    } else {
      let myArr = [];
      for (let i=0; i<resArr.length; i++) {
      myArr.push(resArr[i].split(' ').join(''));
    }
    const sortArr = myArr.sort();
    const result = sortArr.map((el) => el[0]).join('');
    return result;
    }
  }
}

module.exports = {
  createDreamTeam
};
