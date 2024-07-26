function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  for (let str of yes) if (!regexp.test(str)) {
    console.log(`Failure to match '${str}'`);
  }
  for (let str of no) if (regexp.test(str)) {
    console.log(`Unexpected match for '${str}'`);
  }
}

// 1. Match "car" and "cat"
verify(/c[ar]a[t]/,
       ["my car", "bad cats"],
       ["camper", "high art"]);

// 2. Match "pop" and "prop"
verify(/p(op|rop)/,
       ["pop culture", "mad props"],
       ["plop", "prrrop"]);

// 3. Match "ferret", "ferry", and "ferrari"
verify(/ferr(y|et|ari)/,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

// 4. Match any word ending in "ious"
verify(/\w+ious\b/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

// 5. Match a whitespace character followed by a period, comma, colon, or semicolon
verify(/\s[.,:;]/,
       ["bad punctuation ."],
       ["escape the period"]);

// 6. Match a word longer than six letters
verify(/\b\w{7,}\b/,
       ["Siebentausenddreihundertzweiundzwanzig"],
       ["no", "three small words"]);

// 7. Match a word without the letter 'e' or 'E'
verify(/\b[^eE\s]+\b/,
       ["red platypus", "wobbling nest"],
       ["earth bed", "bedrøvet abe", "BEET"]);
