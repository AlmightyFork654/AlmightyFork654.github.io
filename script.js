// lijst van Pi decimalen en variable 
const piDecimals = [1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3, 2, 3, 8, 4, 6, 2, 6, 4, 3, 3, 8, 3, 2, 7, 9, 5, 0, 2, 8, 8, 4, 1, 9, 7, 1, 6, 9, 3, 9, 9, 3, 7, 5, 1, 0, 5, 8, 2, 0, 9, 7, 4, 9, 4, 4, 5, 9, 2, 3, 0, 7, 8, 1, 6, 4, 0, 6, 2, 8, 6, 2, 0, 8, 9, 9, 8, 6, 2, 8, 0, 3, 4, 8, 2, 5, 3, 4, 2, 1, 1, 7, 0, 6, 7, 9, 8, 2, 1, 4, 8, 0, 8, 6, 5, 1, 3, 2, 8, 2, 3, 0, 6, 6, 4, 7, 0, 9, 3, 8, 4, 4, 6, 0, 9, 5, 5, 0, 5, 8, 2, 2, 3, 1, 7, 2, 5, 3, 5, 9, 4, 0, 8, 1, 2, 8, 4, 8, 1, 1, 1, 7, 4, 5, 0, 2, 8, 4, 1, 0, 2, 7, 0, 1, 9, 3, 8, 5, 2, 1, 1, 0, 5, 5, 5, 9, 6, 4, 4, 6, 2, 2, 9, 4, 8, 9, 5, 4, 9, 3, 0, 3, 8, 1, 9, 6, 4, 4, 2, 8, 8, 1, 0, 9, 7, 5, 6, 6, 5, 9, 3, 3, 4, 4, 6, 1, 2, 8, 4, 7, 5, 6, 4, 8, 2, 3, 3, 7, 8, 6, 7, 8, 3, 1, 6, 5, 2, 7, 1, 2, 0, 1, 9, 0, 9, 1, 4, 5, 6, 4, 8, 5, 6, 6, 9, 2, 3, 4, 6, 0, 3, 4, 8, 6, 1, 0, 4, 5, 4, 3, 2, 6, 6, 4, 8, 2, 1, 3, 3, 9, 3, 6, 0, 7, 2, 6, 0, 2, 4, 9, 1, 4, 1, 2, 7, 3, 7, 2, 4, 5, 8, 7, 0, 0, 6, 6, 0, 6, 3, 1, 5, 5, 8, 8, 1, 7, 4, 8, 8, 1, 5, 2, 0, 9, 2, 0, 9, 6, 2, 8, 2, 9, 2, 5, 4, 0, 9, 1, 7, 1, 5, 3, 6, 4, 3, 6, 7, 8, 9, 2, 5, 9, 0, 3, 6, 0, 0, 1, 1, 3, 3, 0, 5, 3, 0, 5, 4, 8, 8, 2, 0, 4, 6, 6, 5, 2, 1, 3, 8, 4, 1, 4, 6, 9, 5, 1, 9, 4, 1, 5, 1, 1, 6, 0, 9, 4, 3, 3, 0, 5, 7, 2, 7, 0, 3, 6, 5, 7, 5, 9, 5, 9, 1, 9, 5, 3, 0, 9, 2, 1, 8, 6, 1, 1, 7, 3, 8, 1, 9, 3, 2, 6, 1, 1, 7, 9, 3, 1, 0, 5, 1, 1, 8, 5, 4, 8, 0, 7, 4, 4, 6, 2, 3, 7, 9, 9, 6, 2, 7, 4, 9, 5, 6, 7, 3, 5, 1, 8, 8, 5, 7, 5, 2, 7, 2, 4, 8, 9, 1, 2, 2, 7, 9, 3, 8, 1, 8, 3, 0, 1, 1, 9, 4, 9, 1, 2, 9, 8, 3, 3, 6, 7, 3, 3, 6, 2, 4, 4, 0, 6, 5, 6, 6, 4, 3, 0, 8, 6, 0, 2, 1, 3, 9, 4, 9, 4, 6, 3, 9, 5, 2, 2, 4, 7, 3, 7, 1, 9, 0, 7, 0, 2, 1, 7, 9, 8, 6, 0, 9, 4, 3, 7, 0, 2, 7, 7, 0, 5, 3, 9, 2, 1, 7, 1, 7, 6, 2, 9, 3, 1, 7, 6, 7, 5, 2, 3, 8, 4, 6, 7, 4, 8, 1, 8, 4, 6, 7, 6, 6, 9, 4, 0, 5, 1, 3, 2, 0, 0, 0, 5, 6, 8, 1, 2, 7, 1, 4, 5, 2, 6, 3, 5, 6, 0, 8, 2, 7, 7, 8, 5, 7, 7, 1, 3, 4, 2, 7, 5, 7, 7, 8, 9, 6, 0, 9, 1, 7, 3, 6, 3, 7, 1, 7, 8, 7, 2, 1, 4, 6, 8, 4, 4, 0, 9, 0, 1, 2, 2, 4, 9, 5, 3, 4, 3, 0, 1, 4, 6, 5, 4, 9, 5, 8, 5, 3, 7, 1, 0, 5, 0, 7, 9, 2, 2, 7, 9, 6, 8, 9, 2, 5, 8, 9, 2, 3, 5, 4, 2, 0, 1, 9, 9, 5, 6, 1, 1, 2, 1, 2, 9, 0, 2, 1, 9, 6, 0, 8, 6, 4, 0, 3, 4, 4, 1, 8, 1, 5, 9, 8, 1, 3, 6, 2, 9, 7, 7, 4, 7, 7, 1, 3, 0, 9, 9, 6, 0, 5, 1, 8, 7, 0, 7, 2, 1, 1, 3, 4, 9, 9, 9, 9, 9, 9, 8, 3, 7, 2, 9, 7, 8, 0, 4, 9, 9, 5, 1, 0, 5, 9, 7, 3, 1, 7, 3, 2, 8, 1, 6, 0, 9, 6, 3, 1, 8, 5, 9, 5, 0, 2, 4, 4, 5, 9, 4, 5, 5, 3, 4, 6, 9, 0, 8, 3, 0, 2, 6, 4, 2, 5, 2, 2, 3, 0, 8, 2, 5, 3, 3, 4, 4, 6, 8, 5, 0, 3, 5, 2, 6, 1, 9, 3, 1, 1, 8, 8, 1, 7, 1, 0, 1, 0, 0, 0, 3, 1, 3, 7, 8, 3, 8, 7, 5, 2, 8, 8, 6, 5, 8, 7, 5, 3, 3, 2, 0, 8, 3, 8, 1, 4, 2, 0, 6, 1, 7, 1, 7, 7, 6, 6, 9, 1, 4, 7, 3, 0, 3, 5, 9, 8, 2, 5, 3, 4, 9, 0, 4, 2, 8, 7, 5, 5, 4, 6, 8, 7, 3, 1, 1, 5, 9, 5, 6, 2, 8, 6, 3, 8, 8, 2, 3, 5, 3, 7, 8, 7, 5, 9, 3, 7, 5, 1, 9, 5, 7, 7, 8, 1, 8, 5, 7, 7, 8, 0, 5, 3, 2, 1, 7, 1, 2, 2, 6, 8, 0, 6, 6, 1, 3, 0, 0, 1, 9, 2, 7, 8, 7, 6, 6, 1, 1, 1, 9, 5, 9, 0, 9, 2, 1, 6, 4, 2, 0, 1, 9, 8, 9];

let counter = 0;
let isTesting = false;
let isCompeting = false;
let lives = 3;

//battlepass xp
if (document.URL == "https://almightyfork654.github.io/battlepass.html") {
  document.addEventListener("DOMContentLoaded", function() {
    let BattlePassXP = document.getElementById("BattlePass");
    BattlePassXP.value = getCookie("BattlePass");
  })
}

let highScore = null
if (getCookie("highScore") == null) {
  highScore = 0
}
else {
  highScore = getCookie("highScore")
}

//cookies!
function setCookie(name, value, daysToLive) {
  const date = new Date();
  date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
  let expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`
}

function deleteCookie(name) {
  setCookie(name, null, null);
}

function getCookie(name) {
  const cDecoded = decodeURIComponent(document.cookie);
  const cArray = cDecoded.split("; ");
  let result = null;

  cArray.forEach(element => {
    if (element.indexOf(name) == 0) {
      result = element.substring(name.length + 1)
    }
  })
  return result;
}

// checks if document is test.html, compete.html or battlepass.html
if (document.URL == "https://almightyfork654.github.io/test.html") {
  isTesting = true;
}
if (document.URL == "https://almightyfork654.github.io/compete.html") {
  isCompeting = true;
}
if (document.URL == "https://almightyfork654.github.io/battlepass.html") {
  BPPage = true;
}

//alvast gedefinieerd
let een = null;
let twee = null;
let drie = null;
let vier = null;
let vijf = null;

let myEen = null;
let myTwee = null;
let myDrie = null;
let myVier = null;
let myVijf = null;

//toetsenbord functionaliteit
document.addEventListener("keydown", function(event) {
  if (event.key >= 0 && event.key <= 9) {
    output(event.key);
  }
  else if (event.key == "Backspace") {
    reset()
  }
});

//herdefinieren
function reDefine() {
  een = document.getElementById("een");
  twee = document.getElementById("twee");
  drie = document.getElementById("drie");
  vier = document.getElementById("vier");
  vijf = document.getElementById("vijf");

  myEen = document.getElementById("myEen");
  myTwee = document.getElementById("myTwee");
  myDrie = document.getElementById("myDrie");
  myVier = document.getElementById("myVier");
  myVijf = document.getElementById("myVijf");
}

//functionaliteit

//game over function
function gameOver() {
  if (isTesting) {
    lives -= 1;
    if (lives == 0) {
      alert("Game over!");
      setHighscore();
      reset();
    }
  }
  else if (isCompeting) {
    alert("Game over!");
    setHighscore();
    reset();
  }
}

//set highscore en geeft beetje xp als highscore omhoog gaat
function setHighscore() {
  if (getCookie("highScore") < counter) {
    setCookie("highScore", counter, 365);
    setCookie("BattlePass", Number(getCookie("BattlePass")) + 10, 365);
    mustGrandXP();
  }
}

// checks of xp moet worden gegeven doordat een challange voltooid is
function mustGrandXP() {
  if (getCookie("highScore") >= 5 && getCookie(5) == null) {
    setCookie("BattlePass", Number(getCookie("BattlePass")) + 50, 365);
    setCookie(5, true, 365);
  }
  if (getCookie("highScore") >= 10 && (getCookie(10) == null)) {
    setCookie("BattlePass", Number(getCookie("BattlePass")) + 50, 365);
    setCookie(10, true, 365);
  }
  if (getCookie("highScore") >= 15 && (getCookie(15) == null)) {
    setCookie("BattlePass", Number(getCookie("BattlePass")) + 50, 365);
    setCookie(15, true, 365);
  }
  if (getCookie("highScore") >= 20 && (getCookie(20) == null)) {
    setCookie("BattlePass", Number(getCookie("BattlePass")) + 50, 365);
    setCookie(20, true, 365);
  }
  if (getCookie("highScore") >= 25 && (getCookie(25) == null)) {
    setCookie("BattlePass", Number(getCookie("BattlePass")) + 50, 365);
    setCookie(25, true, 365);
  }
  if (getCookie("highScore") >= 30 && (getCookie(30) == null)) {
    setCookie("BattlePass", Number(getCookie("BattlePass")) + 50, 365);
    setCookie(30, true, 365);
  }
  if (getCookie("highScore") >= 35 && (getCookie(35) == null)) {
    setCookie("BattlePass", Number(getCookie("BattlePass")) + 50, 365);
    setCookie(35, true, 365);
  }
  if (getCookie("highScore") >= 40 && (getCookie(40) == null)) {
    setCookie("BattlePass", Number(getCookie("BattlePass")) + 50, 365);
    setCookie(40, true, 365);
  }
}


//controleer of de input voldoet aan de eisen om door te gaan, zo niet flash rood en mogelijke game over
function output(num) {
  if (piDecimals[counter] == num) {
    counter += 1;
    update("value")
  }
  else {
    if ((!isTesting) && (!isCompeting)) {
      drie.style.color = "#940000";
    }
    myDrie.style.color = "#940000"
    setTimeout(() => {
      if ((!isTesting) && (!isCompeting)) {
        drie.style.color = "#bc8629";
      }
      myDrie.style.color = "#bc8629";
    }, 300);
    gameOver()
  }
}

//update zichtbare decimalen 
function update(message) {
  if (counter == 0) {
    //herdifinieren om volgorde probleem te voorkomen (var = null error voorkomen)
    reDefine()
    if ((!isTesting) && (!isCompeting)) {
      een.innerText = 3;
      twee.innerText = ".";
    }
    myEen.innerText = 3
    myTwee.innerText = "."
  }
  else if (counter == 1) {
    if ((!isTesting) && (!isCompeting)) {
      een.innerText = ".";
      twee.innerText = piDecimals[counter - 1];
    }
    myEen.innerText = ".";
    myTwee.innerText = piDecimals[counter - 1];
  }
  else {
    if ((!isTesting) && (!isCompeting)) {
      een.innerText = piDecimals[counter - 2];
      twee.innerText = piDecimals[counter - 1];
    }
    myEen.innerText = piDecimals[counter - 2];
    myTwee.innerText = piDecimals[counter - 1];
  }
  if ((!isTesting) && (!isCompeting)) {
    drie.innerText = piDecimals[counter];
    vier.innerText = piDecimals[counter + 1];
    vijf.innerText = piDecimals[counter + 2];
  }
  myDrie.innerText = '...', myVier.innerText = '...', myVijf.innerText = '...';

  //invisible characters voor wat spacing ...
  if (isCompeting || isTesting) { document.getElementById("info").innerText = `current: ${counter} ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎Highscore: ${highScore}`; }

  if (message == "value") {
    checkWin(getCookie("currentGoal"))
  }
  if (message == !null && message != "test") {
    checkWin(message)
  }
}

//reset huidige sessie
function reset() {
  counter = 0;
  lives = 3;
  update(null);
  //update highscore indicator
  location.reload();
}

//de test mode
//beetje veel tekst, maar ja hele pagina moet verandert worden om errors te voorkomen bij t klikken op de knoppen voordat een doel gekozen is
function setGoal() {
  setCookie("currentGoal", document.getElementById("goal").value, 365)
  // setCookie("hasSelected", true, 365);
  document.getElementById("change").innerHTML = '<div class="center"><p><span id="myEen">?</span><span id="myTwee">?</span><span id="myDrie">?</span><span id="myVier">?</span><span id="myVijf">?</span></p></div><div class="info_bar"><p id="info"></p></div><div class="center"><div class="box"><button class="button" type="button" onclick="output(1)">1</button><button class="button" type="button" onclick="output(2)">2</button><button class="button" type="button" onclick="output(3)">3</button><br><button class="button" type="button" onclick="output(4)">4</button><button class="button" type="button" onclick="output(5)">5</button><button class="button" type="button" onclick="output(6)">6</button><br><button class="button" type="button" onclick="output(7)">7</button><button class="button" type="button" onclick="output(8)">8</button><button class="button" type="button" onclick="output(9)">9</button><br><button class="button" type="button" onclick="output(0)">0</button></div><br><button class="reset" type="button" onclick="reset()">reset</button></div>';
  update(Number(getCookie("currentGoal")))
}

function checkWin(goal) {
  if (counter == goal) {
    alert("Goal Reached");
    // setCookie("hasSelected", false, 365);
    reset();
    deleteCookie("currentGoal")
  }
}

//progression and testing

//set progress value of progress bar and counter above, is may be a bit messy, but its efficient like this
function updateQuests() {
  const IDs = { "bar5": "questFive", "bar10": "questTen", "bar15": "questFifteen", "bar20": "questTwenty", "bar25": "questTwentyFive", "bar30": "questThirty", "bar35": "questThirtyVife", "bar40": "questForty", "bar45": "questFortyFive", "bar50": "questFifty", "bar60": "questSixty", "bar70": "questSeventy", "bar80": "questEighty", "bar90": "questNinety", "bar100": "questHundred", "bar110": "questHundredTen" }

  for (var key in IDs) {
    let num = document.getElementById(key).max;
    if (highScore < num) {
      document.getElementById(IDs[key]).innerHTML = `${highScore}/${num}`;
      document.getElementById(key).value = highScore;
    }
    else {
      document.getElementById(IDs[key]).innerHTML = `${num}/${num}`;
      document.getElementById(key).value = num;
      // change card
      updateCards(num)
    }
  }
}

//changes the cards and grands xp
//kan efficienter, maar geen tijd
function updateCards(num) {
  if (num == 5) {
    document.getElementById("challenge_box_1").style.backgroundColor = "#20d958";
    document.getElementById("image_1").src = "resources/check.png";
  }
  else if (num == 10) {
    document.getElementById("challenge_box_2").style.backgroundColor = "#20d958";
    document.getElementById("image_2").src = "resources/check.png";
  }
  else if (num == 15) {
    document.getElementById("challenge_box_3").style.backgroundColor = "#20d958";
    document.getElementById("image_3").src = "resources/check.png";
  }
  else if (num == 20) {
    document.getElementById("challenge_box_4").style.backgroundColor = "#20d958";
    document.getElementById("image_4").src = "resources/check.png";
  }
  else if (num == 25) {
    document.getElementById("challenge_box_5").style.backgroundColor = "#20d958";
    document.getElementById("image_5").src = "resources/check.png";
  }
  else if (num == 30) {
    document.getElementById("challenge_box_6").style.backgroundColor = "#20d958";
    document.getElementById("image_6").src = "resources/check.png";
  }
  else if (num == 35) {
    document.getElementById("challenge_box_7").style.backgroundColor = "#20d958";
    document.getElementById("image_7").src = "resources/check.png";
  }
  else if (num == 40) {
    document.getElementById("challenge_box_8").style.backgroundColor = "#20d958";
    document.getElementById("image_8").src = "resources/check.png";
  }
  if (num == 45) {
    document.getElementById("challenge_box_9").style.backgroundColor = "#20d958";
    document.getElementById("image_9").src = "resources/check.png";
  }
  else if (num == 50) {
    document.getElementById("challenge_box_10").style.backgroundColor = "#20d958";
    document.getElementById("image_10").src = "resources/check.png";
  }
  else if (num == 60) {
    document.getElementById("challenge_box_11").style.backgroundColor = "#20d958";
    document.getElementById("image_11").src = "resources/check.png";
  }
  else if (num == 70) {
    document.getElementById("challenge_box_12").style.backgroundColor = "#20d958";
    document.getElementById("image_12").src = "resources/check.png";
  }
  else if (num == 80) {
    document.getElementById("challenge_box_13").style.backgroundColor = "#20d958";
    document.getElementById("image_13").src = "resources/check.png";
  }
  else if (num == 90) {
    document.getElementById("challenge_box_14").style.backgroundColor = "#20d958";
    document.getElementById("image_14").src = "resources/check.png";
  }
  else if (num == 100) {
    document.getElementById("challenge_box_15").style.backgroundColor = "#20d958";
    document.getElementById("image_15").src = "resources/check.png";
  }
  else if (num == 110) {
    document.getElementById("challenge_box_16").style.backgroundColor = "#20d958";
    document.getElementById("image_16").src = "resources/check.png";
  }
}

//updates xp counter
function setXP() {
  if (Number(getCookie("BattlePass")) >= 1000) {
    document.getElementById("counter2").innerText = `250/250 XP`
    document.getElementById("counter3").innerText = `500/500 XP`
    document.getElementById("counter4").innerText = `750/750 XP`
    document.getElementById("counter5").innerText = `1000/1000 XP`
  }
  else if ((Number(getCookie("BattlePass")) >= 750) && (Number(getCookie("BattlePass")) < 1000)) {
    document.getElementById("counter2").innerText = `250/250 XP`
    document.getElementById("counter3").innerText = `500/500 XP`
    document.getElementById("counter4").innerText = `750/750 XP`
    document.getElementById("counter5").innerText = `${Number(getCookie("BattlePass"))}/1000 XP`
  }
  else if ((Number(getCookie("BattlePass")) >= 500) && (Number(getCookie("BattlePass")) < 750)) {
    document.getElementById("counter2").innerText = `250/250 XP`
    document.getElementById("counter3").innerText = `500/500 XP`
    document.getElementById("counter4").innerText = `${Number(getCookie("BattlePass"))}/750 XP`
    document.getElementById("counter5").innerText = `${Number(getCookie("BattlePass"))}/1000 XP`
  }
  else if ((Number(getCookie("BattlePass")) >= 250) && (Number(getCookie("BattlePass")) < 500)) {
    document.getElementById("counter2").innerText = `250/250 XP`
    document.getElementById("counter3").innerText = `${Number(getCookie("BattlePass"))}/500 XP`
    document.getElementById("counter4").innerText = `${Number(getCookie("BattlePass"))}/750 XP`
    document.getElementById("counter5").innerText = `${Number(getCookie("BattlePass"))}/1000 XP`
  }
  else {
    document.getElementById("counter2").innerText = `${Number(getCookie("BattlePass"))}/250 XP`
    document.getElementById("counter3").innerText = `${Number(getCookie("BattlePass"))}/500 XP`
    document.getElementById("counter4").innerText = `${Number(getCookie("BattlePass"))}/750 XP`
    document.getElementById("counter5").innerText = `${Number(getCookie("BattlePass"))}/1000 XP`
  }
}

//battle pass rewards
document.addEventListener("DOMContentLoaded", function() {
  if ((Number(getCookie("BattlePass")) >= 250) && (BPPage == true)) {
    const field = document.getElementById("inline");
    field.innerHTML += '<div class="button_box"><p>YEH a Reward</p><button class="claim_button" onclick="reward2()">Claim</button></div>';
  }
  if ((Number(getCookie("BattlePass")) >= 500) && (BPPage == true)) {
    const field = document.getElementById("inline");
    field.innerHTML += '<div class="button_box"><p>YEH a Reward</p><button class="claim_button" onclick="reward3()">Claim</button></div>';
  }
  if ((Number(getCookie("BattlePass")) >= 750) && (BPPage == true)) {
    const field = document.getElementById("inline");
    field.innerHTML += '<div class="button_box"><p>YEH a Reward</p><button class="claim_button" onclick="reward4()">Claim</button></div>';
  }
  if ((Number(getCookie("BattlePass")) >= 1000) && (BPPage == true)) {
    const field = document.getElementById("inline");
    field.innerHTML += '<div class="button_box"><p>YEH a Reward</p><button class="claim_button" onclick="reward5()">Claim</button></div>';
  }
})

function reward1() {
  alert("Did you know that π has an infinite decimal places?");
}

function reward2() {
  alert("Did you know that π is used in math?");
}

function reward3() {
  setInterval(function() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var color = "rgb(" + x + "," + y + "," + z + ")";

    document.getElementById("pi").style.backgroundColor = color;
    document.getElementById("title").style.backgroundColor = color;
  }, 50)
}

function reward4() {
  setInterval(function() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

    document.body.style.background = bgColor;
  }, 50)
}

//sorry
function reward5() { window.location.href = "https://www.youtube.com/watch?v=mx86-rTclzA"; }



//dev function (ez level up) 
// function levelUp() {
//   document.cookie = "BattlePass=1000"
//   location.reload()
// }

// -----------------------------------------------------------------------------------------------------------------------------

//quick resets and stuff mag genegeerd worden

// console.log(document.cookie)
// document.cookie = "BattlePass=0"
// document.cookie = "highScore=0"

// document.cookie = "5=0;expires=Thu, 18 Dec 2022 12:00:00 UTC;path=/;"
// document.cookie = "10=0;expires=Thu, 18 Dec 2022 12:00:00 UTC;path=/;"
// document.cookie = "15=0;expires=Thu, 18 Dec 2022 12:00:00 UTC;path=/;"
// document.cookie = "20=0;expires=Thu, 18 Dec 2022 12:00:00 UTC;path=/;"
// document.cookie = "25=0;expires=Thu, 18 Dec 2022 12:00:00 UTC;path=/;"
// document.cookie = "30=0;expires=Thu, 18 Dec 2022 12:00:00 UTC;path=/;"
// document.cookie = "35=0;expires=Thu, 18 Dec 2022 12:00:00 UTC;path=/;"
// document.cookie = "40=0;expires=Thu, 18 Dec 2022 12:00:00 UTC;path=/;"

// document.cookie = "hasSelected=false"
