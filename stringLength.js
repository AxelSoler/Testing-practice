function stringhLength(string1) {
  if (string1.length >= 1 && string1.length <= 10) {
    return string1.length;
  } else if(string1 == '') {
    throw new Error('there is not a word');
  } else {
    throw new Error('the word has more than 10 characters');
  }
}

module.exports = stringhLength;