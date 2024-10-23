const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? Nicknames are also acceptable :)", (name) => {
  
  rl.question("What's an activity you like doing?", (activity) => {
    rl.question("What do you listen to while doing that?", (music) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (meal) => {
        rl.question("What's your favourite thing to eat for that meal?", (food) => {
          rl.question("Which sport is your absolute favourite?", (sport) => {
             rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (gift) => {
              console.log(`Meet: ${name}. They enjoy ${activity} They listen to ${music}, while they ${activity}. Their favourit meal is: ${meal},
                and they're favourite thing to have for ${meal} is ${food} They like watching ${sport}, and their one real life superpower is: ${gift}`);
 rl.close();
});});});});});});});




  

    

      







  