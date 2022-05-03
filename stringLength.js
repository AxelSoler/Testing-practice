function stringhLength(string) {
  if (string.length >= 1 && string.length <= 10) {
    return string.length;
  } else if(string.length < 1) {
    throw new Error('there is not a word');
  } else {
    throw new Error('the word has more than 10 characters');
  }
}

module.exports = stringhLength;