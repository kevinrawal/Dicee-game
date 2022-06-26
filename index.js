function myFunction(){
//creating a random numbers
var randomNumber_1 = Math.random();
var randomNumber_2 = Math.random();
//number should be between 1 to 6
randomNumber_1 = randomNumber_1*6 + 1;
randomNumber_2 = randomNumber_2*6 + 1;

//rounded to decimal place
randomNumber_1 = Math.floor(randomNumber_1);
randomNumber_2 = Math.floor(randomNumber_2);

document.getElementById("img1").src = "/images/dice"+randomNumber_1+".png";
document.getElementById("img2").src = "/images/dice"+randomNumber_2+".png";

//random 1

// if(randomNumber_1==1){
//     document.getElementById("img1").src = "/images/dice1.png";
// }
// else if(randomNumber_1==2){
//     document.getElementById("img1").src = "/images/dice2.png";
// } 
// else if(randomNumber_1==3){
//     document.getElementById("img1").src = "/images/dice3.png";
// } 
// else if(randomNumber_1==4){
//     document.getElementById("img1").src = "/images/dice4.png";
// } 
// else if(randomNumber_1==5){
//     document.getElementById("img1").src = "/images/dice5.png";
// } 
// else if(randomNumber_1==6){
//     document.getElementById("img1").src = "/images/dice6.png";
// }  


//random 2

// if(randomNumber_2==1){
//     document.getElementById("img2").src = "/images/dice1.png";
// }
// else if(randomNumber_2==2){
//     document.getElementById("img2").src = "/images/dice2.png";
// } 
// else if(randomNumber_2==3){
//     document.getElementById("img2").src = "/images/dice3.png";
// } 
// else if(randomNumber_2==4){
//     document.getElementById("img2").src = "/images/dice4.png";
// } 
// else if(randomNumber_2==5){
//     document.getElementById("img2").src = "/images/dice5.png";
// } 
// else if(randomNumber_2==6){
//     document.getElementById("img2").src = "/images/dice6.png";
// }    


if(randomNumber_1>randomNumber_2){
    document.querySelector(".container h1").innerHTML = "Player 1 Won";
}
else if(randomNumber_1<randomNumber_2){
    document.querySelector(".container h1").innerHTML = "Player 2 Won";
}
else{
    document.querySelector(".container h1").innerHTML = "No one Won";
}


}

