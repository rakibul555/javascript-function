//First Mathod
function firstMethod(){
  var x = document.getElementById("userInput").value;

  if(x == 0){
    document.querySelector("#day").innerHTML = "Good morning";
  }else if(x == 1){
    document.querySelector("#day").innerHTML = "Good morning";
  }else if( x == 2){
    document.querySelector("#day").innerHTML = "Good morning";
  }else if( x == 3){
    document.querySelector("#day").innerHTML = "Good morning";
  }else if( x == 4){
    document.querySelector("#day").innerHTML = "Good morning";
  }else if( x == 5){
    document.querySelector("#day").innerHTML = "Good morning";
  }
  else if( x == 6){
    document.querySelector("#day").innerHTML = "Good morning";
  }else if( x == 7){
    document.querySelector("#day").innerHTML = "Good afternoon";
  }else if( x == 8){
    document.querySelector("#day").innerHTML = "Good afternoon";
  }else if( x == 9){
    document.querySelector("#day").innerHTML = "Good afternoon";
  }else if( x == 10){
    document.querySelector("#day").innerHTML = "Good afternoon";
  }
  else if( x == 11){
    document.querySelector("#day").innerHTML = "Good afternoon";
  }else if( x == 12){
    document.querySelector("#day").innerHTML = "Good afternoon";
  }else if( x == 13){
    document.querySelector("#day").innerHTML = "Good evening";
  }else if( x == 14){
    document.querySelector("#day").innerHTML = "Good evening";
  }else if( x == 15){
    document.querySelector("#day").innerHTML = "Good evening";
  }
  else if( x == 16){
    document.querySelector("#day").innerHTML = "Good evening";
  }else if( x == 17){
    document.querySelector("#day").innerHTML = "Good evening";
  }else if( x == 18){
    document.querySelector("#day").innerHTML = "Good evening";
  }else if( x == 19){
    document.querySelector("#day").innerHTML = "Good night";
  }else if( x == 20){
    document.querySelector("#day").innerHTML = "Good night";
  
  }
  else if( x == 21){
    document.querySelector("#day").innerHTML = "Good night";
  }else if( x == 22){
    document.querySelector("#day").innerHTML = "Good night";
  }else if( x == 23){
    document.querySelector("#day").innerHTML = "Good night";
  }else if( x == 24){
    document.querySelector("#day").innerHTML = "Good night";
  }else{
    document.querySelector("#day").innerHTML = "Sorry! invalid day";
  }
}

//Second Method
function secounMethod(){
  var a = document.getElementById("userNumberInput").value;

  if( a <= 6 ){
    document.getElementById("day-2").innerHTML ="Good Morning";
  }else if( a <= 12 ){
    document.getElementById("day-2").innerHTML ="Good Afternoon";
  }else if( a <= 18 ){
    document.getElementById("day-2").innerHTML ="Good Evening";
  }else if( a  <= 24 ){
    document.getElementById("day-2").innerHTML ="Good Night";
  }else(
    document.getElementById("day-2").innerHTML ="Your keywrod is worng!"
  )
  
}




//calculator function
function calculator(){
  var a = document.getElementById("f-box").value;
  var b = document.getElementById("s-box").value;
  var finalResult = parseInt(a) + parseInt(b);

  document.getElementById("result").innerHTML =finalResult;

}

















































// $(document).ready(function(){

//     $("#b-hide").click(function(){

//         $(".demo").hide();
//     });
//     $("#b-show").click(function(){

//         $(".demo").show();
//     });

// });


// $(document).ready(function(){
//   $("#hide").click(function(){
//     $(".demo").hide();
//   });

//   $("#show").click(function(){
//     $(".demo").show();
//   });
// });












