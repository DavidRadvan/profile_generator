const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let output = [];

rl.question('What\'s your name? Nicknames are also acceptable :) ', (nameAnswer) => {
  rl.question('What\'s an activity you like doing? ', (activityAnswer) => {
    rl.question('What do you listen to while doing that? ', (musicAnswer) => {
      rl.question('Favorite Meal (dinner, breakfast, etc)? ', (mealAnswer) => {
        rl.question('Favorite food for that meal? ', (foodAnswer) => {
          rl.question('Favorite sport? ', (sportAnswer) => {
            rl.question('What\'s your superpower? What are you amazing at? ', (superAnswer) => {
              console.log(`Your name is ${nameAnswer}. Your favorite activity is ${activityAnswer}, during which you listen to ${musicAnswer}. Your favorite meal is ${mealAnswer}, and the best ${mealAnswer} food is ${foodAnswer}! Your sport of choice is ${sportAnswer}. Your hidden talent, your ultimate superpower, is described as: ${superAnswer}`);
              rl.close();
            });
          });
        });
      });
    });
  });



});
