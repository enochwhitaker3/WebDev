/*let age = 21;
age < 18 ? console.log("you cannot buy alcohol virgin"): console.log("that'll be 20$");

let shake = prompt("Would you like to shake the magic ball?: Y or N");
console.log();
let randomNumber = Math.random(); 
randomNumber = randomNumber * 6; 
RandomNumber = Math.floor(randomNumber);  
console.log(RandomNumber);*/
/*let number;
let randomNumber = Math.random(); 
randomNumber = randomNumber * 2; 
RandomNumber = Math.floor(randomNumber); 
do {
  number = prompt("Please enter a number between 0 and 3:");
} while (!(number == RandomNumber));

const myArray = [1,5,7];
for(el in myArray){
    console.log(Number(el));
    el = Number(el) + 5;
    console.log(el);
}
console.log(myArray);*/


let sticks = 20;
let i = 0

alert ("Lets Play Sticks!");
alert ("Players Take Turn's picking up between 1 and 3 sticks and the one who has to pick up the last loses!");

while(i < 100)
{
  sticks = playerOneTurn(sticks);
  sticks = playerTwoTurn(sticks);
  i++
}


function playerOneTurn(sticks) {
  let playerOneChoice = prompt(`Player 1 there are currently: ${sticks} left, How many will you choose?`);
  if (sticks == 1)
  {
    alert ("Player Two Wins!");
  }
  if (playerOneChoice > sticks || playerOneChoice >= sticks)
  {
    alert("There's not that many sticks left! Your Turn is Forfeit!");
    return sticks
  }
  if (playerOneChoice > 3 || playerOneChoice < 0)
  {
    alert (`You can only pick between 1 and 3 sticks! Your Turn is Forfeit!`);
    return sticks;
    
  }
  else
  {
    return (sticks - playerOneChoice);
  }


}
function playerTwoTurn(sticks) {
  let playerTwoChoice = prompt(`Player 2 there are currently: ${sticks} left, How many will you choose?`);
  if (sticks == 1)
  {
    alert ("Player One Wins!");
    //break;
  }
  if (playerTwoChoice > sticks || playerTwoChoice >= sticks)
  {
    alert("There's not that many sticks left! Your Turn is Forfeit!");
    return sticks;
  }
  if (playerTwoChoice > 3 || playerTwoChoice < 0)
  {
    alert (`You can only pick between 1 and 3 sticks! Your Turn is Forfeit!`);
    return sticks;
  }
  else 
  {
    return (sticks - playerTwoChoice);
  }
}

