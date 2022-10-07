//Generate a random number from 1 to 6
const firstRandumNum =Math.floor(Math.random()*6)+1;
const firstDiceImage = 'img/dice' + firstRandumNum + '.png';
document.querySelectorAll('img')[0].setAttribute('src',firstDiceImage);

//Generate a random number from 1 to 6
const secondRandumNum =Math.floor(Math.random()*6)+1;
const secondDiceImage = 'img/dice' + secondRandumNum + '.png';
document.querySelectorAll('img')[1].setAttribute('src',secondDiceImage);
//logic for winer
if(firstRandumNum>secondRandumNum){
    document.querySelector('h1').innerHTML='The winer is user 1';
}
else if(firstRandumNum<secondRandumNum){
    document.querySelector('h1').innerHTML='The winer is user 2';
}
else{
    document.querySelector('h1').innerHTML="It's a Draw";
}