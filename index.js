var readlineSync = require('readline-sync');

var score=0

var userName = readlineSync.question("Hello, What is your name ? ")
console.log("Welcome " + userName + ", Lets see How well do you know Lomesh !")
console.log("");

function test(question, answer)
{
  userAnswer = readlineSync.question(question)

  if(userAnswer === answer)
  {
    console.log("congrats you are right")
    score++;
    console.log("your current score is :" + score)
    console.log("");
    console.log("----------------------------");
    console.log("");

  } else {
    console.log("Sorry, You are wrong")
    score--;
    console.log("your current score is :" + score)
    console.log("");
    console.log("----------------------------");
    console.log("");

  }
}

test("where do i live ? ","mumbai");
test("which is my fav place ? ","lonavla");
test("which is my fav series ? ","startup");
test("what is my birth year ? ","1999");
test("which course i am currently pursuing ? ","MCA");

console.log("Congrats " + userName + " ! Your Total score is : " + score)
console.log("Thank You for Playing")