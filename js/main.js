var elButton = document.querySelector("#countBtn");
var elColorBtn = document.querySelector("#colorBtn");
var elRetryBtn = document.querySelector("#resetBtn");
var resultValue = document.querySelector("#countInfo");
var elHeading = document.querySelector(".zikr")
var elBody = document.querySelector("body")

var count1 = 0;
elButton.addEventListener("click", function(){
  var value = Number(resultValue.value);
  value += 1;
  resultValue.value = value
  // elHeading.style.transform = "scale(.9);"
  // 102 % 100

  if(resultValue.value > 33 ){
    // alert("Hi")
    count1++;
    elHeading.textContent = "Alhamdulillah (33x)"
    elBody.style.backgroundColor = "#5d8aa8"
    // elHeading.style.transform = "scale(.9)"
    resultValue.value = 0;
  }
  if(count1 == 2){
    elHeading.textContent = "Allohu Akbar (33x)"
    elBody.style.backgroundColor = "#a4c639"
  }

  if(count1 == 3){
    elHeading.textContent = "Субҳаналлоҳи ва биҳамдиҳи (33x)"
    elBody.style.backgroundColor = "#9966cc"
  }

  if(count1 == 4){
    elHeading.textContent = "Астағфируллоҳаллазий ла илаҳа илла ҳувал ҳаййул қоййум ва атубу илайҳ (33x)"
    elBody.style.backgroundColor = "#a4c639"
  }

  if(count1 == 5){
    elHeading.textContent = "Аъузу бикалиматиллаҳит таммаҳ мин ғозабиҳи ва шарри ъибадиҳи ва мин ҳамазатиш шайатийни ва ан йаҳзуруни (33x)"
    elBody.style.backgroundColor = "#cd9575"
  }

  if(count1 == 6){
    elHeading.textContent = "Инний аъузу бика мин ъамалиш шайтони ва саййиатил аҳлами (33x)"
    elBody.style.backgroundColor = "#915c83"
  }

  if(count1 == 7){
    elHeading.textContent = "Бисмикаллоҳумма аҳйа ва амуту"
    elBody.style.backgroundColor = "#faebd7"
  }

  if(count1 == 8){
    elHeading.textContent = "Алҳамду лиллаҳиллазий аҳйана баъда ма аматана ва илайҳин нушур (33x)"
    elBody.style.backgroundColor = "#008000"
  }

  if(count1 == 9){
    elHeading.textContent = "Аллоҳумма аъинний ъала зикрика ва шукрика ва ҳусни ъибадатик (33x)"
    elBody.style.backgroundColor = "#8db600"
  }

  if(count1 == 10){
    elHeading.textContent = "Allohu AkbarАллоҳумма инний аъузу бика минал куфри вал фақри ва ъазабил қобр (33x)"
    elBody.style.backgroundColor = "#00ffff"
  }

  if(count1 == 11){
    elHeading.textContent = "Аллоҳумма инний аъузу бика минал хубси вал хобаис (33x)"
    elBody.style.backgroundColor = "#fbceb1"
  }

  if(count1 == 12){
    elHeading.textContent = "Ла илаҳа иллаллоҳу каримул ъазийм. Субҳанаҳу табарокаллоҳу роббул ъаршил ъазийм. Алҳамду лиллаҳи роббил ъаламийн (33x)"
    elBody.style.backgroundColor = "#7fffd4"
  }

  if(count1 == 13){
    elHeading.textContent = "Бисмиллаҳир роҳманир роҳийм. Ва ла ҳавла ва ла қуввата илла биллаҳил ъалиййил ъазийм (33x)"
    elBody.style.backgroundColor = "#4b5320"
  }

  if(count1 == 14){
    elHeading.textContent = "Аллоҳумма ла саҳла илла ма жаъалтаҳу саҳлан ва анта тажъалул ҳазна иза ши`та саҳла (33x)"
    elBody.style.backgroundColor = "#e9d66b"
  }

  if(count1 == 15){
    elHeading.textContent = "Инна лиллаҳи ва инна илайҳи рожиъун (33x)"
    elBody.style.backgroundColor = "#b2beb5"
  }

  if(count1 == 16){
    elHeading.textContent = "Аллоҳумма роббан наси азҳибил ба`са ишфи анта шафий ла шифаа илла шифаука шифаан ла йуғодиру сақома (33x)"
    elBody.style.backgroundColor = "#ff9966"
  }

  if(count1 == 17){
    elHeading.textContent = "Бисмиллаҳил кабийр, наъузу биллаҳил ъазийм, мин шарри ъирқин наъъар, ва мин шарри ҳаррин нар (33x)"
    elBody.style.backgroundColor = "#87a96b"
  }

  if(count1 == 18){
    elHeading.textContent = "Ма ша`аллоҳу ла қуввата илла биллаҳ (33x)"
    elBody.style.backgroundColor = "#fdee00"
  }

  if(count1 == 19){
    elHeading.textContent = "Ойибуна, тоибуна, обидуна, лироббина ҳамидуна (33x)"
    elBody.style.backgroundColor = "#6e7f80"
  }

  if(count1 == 20){
    elHeading.textContent = "Аъузу бикалиматиллаҳит таммати мин шарри ма холақ (33x)"
    elBody.style.backgroundColor = "#007fff"
  }

  if(count1 == 21){
    elHeading.textContent = "Бисмиллаҳи аввалаҳу ва ахираҳу (33x)"
    elBody.style.backgroundColor = "#89cff0"
  }

  if(count1 == 22){
    elHeading.textContent = "Ҳасийбуҳу Аллоҳ вала юзаккий ъалаллоҳу аҳада (33x)"
    elBody.style.backgroundColor = "#f4c2c2"
  }

  if(count1 == 23){
    elHeading.textContent = "Субҳанакаллоҳумма ва биҳамдика ашҳаду анла илаҳа илла анта астағфирука ва атубу илайка (33x)"
    elBody.style.backgroundColor = "#fae7b5"
  }

  if(count1 == 24){
    elHeading.textContent = "Аллоҳумма иғфирлий занбий ва азҳиб ғойза қалбий ва ажирний минаш шайтони», деб айт (33x)"
    elBody.style.backgroundColor = "#848482"
  }

  if(count1 == 25){
    elHeading.textContent = "Закараллоҳу бихойрин ман закараний (33x)"
    elBody.style.backgroundColor = "#98777b"
  }

  if(count1 == 26){
    elHeading.textContent = "Жазокаллоҳу хойрон (33x)"
    elBody.style.backgroundColor = "#f5f5dc"
  }

  if(count1 == 27){
    elHeading.textContent = "Аллоҳумма борик фийҳи вала тазурраҳу (33x)"
    elBody.style.backgroundColor = "#faf0be"
  }
  if(count1 == 28){
    elHeading.textContent = "Ма шааллоҳу ла қуввата илла биллаҳи (33x)"
    elBody.style.backgroundColor = "#8a2be2"
  }
  if(count1 == 29){
    elHeading.textContent = "Астағфируллоҳаллазий ла илаҳа илла ҳувал ҳаййул қаййум ва атубу илайҳи (33x)"
    elBody.style.backgroundColor = "#66ff0"
  }
  if(count1 == 30){
    elHeading.textContent = "Аллоҳумма атина фид-дуня ҳасанатав вафил ахирати ҳасанатав вақина ъазабан-нар (33x)"
    elBody.style.backgroundColor = "#cd7f32"
  }



})

elRetryBtn.addEventListener("click", function(){
  var clear = 0;
  resultValue.value = clear
  elHeading.textContent = "Субҳаналлоҳ (33x)"
  elBody.style.backgroundColor = "White"
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