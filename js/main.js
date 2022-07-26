var elButton = document.querySelector("#countBtn");
var elColorBtn = document.querySelector("#colorBtn");
var elRetryBtn = document.querySelector("#resetBtn");
var resultValue = document.querySelector("#countInfo");

elButton.addEventListener("click", function(){
  var value = Number(resultValue.value);
  value += 1;
  resultValue.value = value

  // if(resultValue.value)
})

elRetryBtn.addEventListener("click", function(){
  var clear = 0;
  resultValue.value = clear
})
var compute = 0;
elColorBtn.addEventListener("click", function(){

  compute++;
  if(compute % 2 == 0){
    resultValue.style.backgroundColor = "white"
    resultValue.style.boxShadow = "0px 0px 3px 2px white"
  }
  else{
    resultValue.style.backgroundColor = "cyan"
    resultValue.style.boxShadow = "0px 0px 5px 2px cyan"

  }


  // alert(compute)
})