var elButton = document.querySelector("#countBtn");
var elColorBtn = document.querySelector("#colorBtn");
var elRetryBtn = document.querySelector("#resetBtn");
var resultValue = document.querySelector("#countInfo");

elButton.addEventListener("click", function(){
  var value = Number(resultValue.value);
  value += 1;
  resultValue.value = value
})

elRetryBtn.addEventListener("click", function(){
  var clear = 0;
  resultValue.value = clear
})

elColorBtn.addEventListener("click", function(){
  var compute = 0;

  compute++;
  if(compute == 1){
    resultValue.style.backgroundColor = "red"
  }
  else if(compute != 1){
    resultValue.style.backgroundColor = "white"

  }
  // alert(compute)
})