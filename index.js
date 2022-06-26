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

document.getElementById("img1").src = "dice"+randomNumber_1+".png";
document.getElementById("img2").src = "dice"+randomNumber_2+".png";

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

