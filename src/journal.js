//business logic

export function Entry(author, userEntry) {
  this.author = author;
  this.userEntry = userEntry;
}

Entry.prototype.wordCount = function() {
  let wordArray = this.userEntry.split(' ');
  let wordCountOutcome = wordArray.length;
  return wordCountOutcome;
};

Entry.prototype.teaser = function() {
  let wordArray = this.userEntry.split(' ');
  let firstEightArray = [];
  for(let i = 0; i < 8; i++) {
    firstEightArray.push(wordArray[i]);
  }
  return firstEightArray.join(" ");
};

Entry.prototype.letterCounter = function () {

  let charArray = this.userEntry.split('').filter(x => /[a-z]/.test(x));
  let vowels = charArray.filter(x => /[aeiou]/.test(x)).length.toString();
  let cons = charArray.filter(x => /[^aeiou]/.test(x)).length.toString();
  return [vowels, cons];
};
