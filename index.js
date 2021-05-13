
// Refresh button
let reloadbtn = document.querySelector("button.button");
let  reload =  reloadbtn.setAttribute("onClick","location.reload()");


// Randomnes of the Dices
let randomNumber1 = Math.floor(Math.random()*6) + 1;
let randomNumber2 = Math.floor(Math.random()*6) + 1;

// Selectors for the Dice image change
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

// Change the Winning Statement for H1
if(randomNumber1 > randomNumber2){
  document.querySelector("h2").textContent = "Player 1 Wins";
}else if( randomNumber1 < randomNumber2){
  document.querySelector("h2").textContent = "Player 2 Wins";
}else {
  document.querySelector("h2").textContent = "It is a Draw";
}
  










