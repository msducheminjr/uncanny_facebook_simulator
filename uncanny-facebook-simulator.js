const gitHubRepo = 'https://github.com/msducheminjr/uncanny_facebook_simulator';
console.log('Welcome to the Facebook feed simulator!');
console.log('Source code can be found at\n' + gitHubRepo + '\n\n');
const calcInterval = function(multiplier) {
  multiplier = multiplier * 1000;
  result = Math.random() * multiplier;
  while (result < 4000) {
    result *= 1.25;
  }
  return result;
};

// adding a new message
// addToChaos(String fbMessage, Integer frequencyModifier);
/* fbMessage
 * Be mindful that the typical Linux terminal wraps at 80 characters and will split you up
 * in the middle of a word. Try to keep messages under 80 characters. If you need a second
 * line to elaborate on a message, use the \n character to break across multiple lines\.
 *
 * frequencyModifier
 * The interval of each post is random, but the frequencyModifier provides the ability to
 * increase or decrease the relative frequency of messages over multiple executions of the
 * simulator. The multiplier is equivalent to the maximum number of seconds if Math.random()
 * came up with a number like .999
*/
const addToChaos = function(fbMessage, frequencyModifier) {
  setInterval(
    () => console.log(fbMessage),
    calcInterval(frequencyModifier)
  );
}

// start with annoying voter registration string
let annoyingVotingString = 'HaVe YoU ReGiStErEd To VoTe?';

// switch to post-election propaganda widget at some point in the future
setTimeout(
  () => {
    console.log('*'.repeat(80));
    console.log('    THE ELECTION IS OVER. TIME TO CHANGE OUR ANNOYING VOTER PROPAGANDA');
    console.log("    WE CAN'T ALLOW ANYBODY TO EXPRESS A POLITICAL OPINION WITHOUT");
    console.log("    ADDING A PROPAGANDA WIDGET TO EVERY POST");
    console.log('*'.repeat(80));
    // keep the old annoying string around but not as frequent
    addToChaos(annoyingVotingString, 35);
    annoyingVotingString = 'SeE tHe ReSuLtS aNd OtHeR iNfO aBoUt ThE eLeCtIoN!';
  },
  calcInterval(60)
);

console.log('Facebook be like')
// Add the annoyingVoting string with a short interval and ability to change
setInterval(
  () => console.log(annoyingVotingString),
  calcInterval(2)
);

// Build the rest of the feed by adding messages to the chaos!
addToChaos(
  'Partially false information:\n' +
  '(Checked by independent fact checkers who agree with Facebook about everything)',
  51
);

addToChaos('Copy and paste (do not share) my digital chain letter!', 48);

addToChaos("I bet most people won’t repost this. You know who you are.", 53);

addToChaos('TRUMP IS LITERALLY HITLER!', 56);

addToChaos('TRUMP IS LITERALLY JESUS!', 79);

addToChaos('Questionnaire phishing for password reset questions (always set to public)', 57);

addToChaos('Ad that knows me creepily well', 81);

addToChaos('Ad that has no clue about me.', 84);

addToChaos('Old person sharing missing person case that was closed years ago.', 96);

addToChaos('(Heated political argument between friends)', 110);

addToChaos('[[ARGUING OVER THE INTERNET INTENSIFIES]]', 140);

addToChaos('Funny video', 160);

addToChaos('Lame meme', 112);

addToChaos('Actually funny meme', 221);

addToChaos('Post about somebody\'s life. Why I joined in the first place...', 139);

addToChaos('Cat video', 121);

addToChaos('Unsolicited friend request', 138);

addToChaos('I can almost feel Zuckerberg breathing on me', 108);

addToChaos('[[TRIGGERED OPINIONATED SCREECHING INTENSIFIES]]', 180);

addToChaos('Food picture', 114);

addToChaos('Spoiler for the game I was recording', 87);

addToChaos(
  "I'm leaving Facebook for good. Join me on [name of new platform]!\n" +
  "(I'll be back in a month...)",
  114
);

addToChaos('Conversation entirely in animated GIFs', 119);

