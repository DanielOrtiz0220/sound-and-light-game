// Global constants
const cluePauseTime = 1000;
const nextClueWaitTime = 1200;
const introTime = 500;
const wait = 4000;

// Global Variables
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; 
var guessCounter = 0;
var randomNum = [];
var clueHoldTime = 1000;
var mistake = 1;
var timeLeft;
var countDown;

// Page Initialization

// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

//begins AudioContext
document.querySelector("button").addEventListener("click", function () {
  context.resume().then(() => {
    console.log("Playback resumed successfully");
  });
});

function timer() {
  countDown = countDown - 1;
  if (countDown <= -1) {
    clearInterval(timeLeft);
    stopGame();
    alert("Game Over! Try to catch them again next time!");
    return;
  }
  document.getElementById("timer").innerHTML =
    "You have " + countDown + " seconds left";
}

function startGame() {
  //initialize game variables
  clearInterval(countDown);

  document.getElementById("intro").play();

  mistake = 1;
  randomNum = [];
  randomPattern();
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  let delay = introTime;
  delay += nextClueWaitTime;
  setTimeout(() => {
    playClueSequence();
  }, 2000); 
  setTimeout(() => {
    timer();
  }, 2900); 
  setTimeout(() => {
    document.getElementById("timer").classList.remove("hidden");
  }, 2900); 
}

function stopGame() {
  //initialize game variables
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("timer").classList.add("hidden");
  clearInterval(timeLeft); 
}

function playTone(btn, len) {
  document.getElementById("audio" + btn).play();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    document.getElementById("audio" + btn).play();
    tonePlaying = true;
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.02);
  tonePlaying = false;
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
  showImage(btn);
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
  stopImage(btn);
}

function showImage(btn) {
  document.getElementById("picture" + btn).classList.remove("hidden");
}

function stopImage(btn) {
  document.getElementById("picture" + btn).classList.add("hidden");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  clearInterval(timeLeft);
  guessCounter = 0;
  clueHoldTime = randomPauseTime(200, 700); 
  let delay = nextClueWaitTime; 
  for (let i = 0; i <= progress; i++) {
    console.log("play single clue: " + randomNum[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, randomNum[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
    clueHoldTime = clueHoldTime - 10; 
    countDown = 3 * (progress + 3);
  }
  timeLeft = setInterval(timer, 1000);
}

function randomPauseTime(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}

function randomPattern() {
  for (let i = 0; i < 10; i++) {
    randomNum.push(Math.floor(Math.random() * (7 - 1) + 1)); 
  }
  console.log(randomNum);
}

function loseGame() {
  stopGame();
  alert("You lost, try again!");
}

function winGame() {
  stopGame();
  alert("You won, you caught them all!");
}

function guess(btn) {
  console.log("user guessed: " + btn);

  if (!gamePlaying) {
    return;
  }

  if (randomNum[guessCounter] == btn) {
    //Guess was correct!
    if (guessCounter == progress) {
      if (progress == randomNum.length - 1) {
        //GAME OVER: WIN!      
        winGame();
      } else {
        //Pattern correct. Add next segment
        progress++; // continues pattern if correct
        playClueSequence();
      }
    } else {
      //so far so good... check the next guess
      guessCounter++; // increases to make sure you're hitting the right
      // button
    }
  } else {
    //Guess was incorrect
    //GAME OVER: LOSE!

    if (mistake == 3) {
      //continues from where you left off with the pattern
      clueHoldTime = 1000;
      loseGame();
    } else {
      alert(
        "Incorrect choice, you have had " +
          mistake +
          " mistake(s) out of 3, please continue the pattern from where you left off."
      );
      mistake++;
    }
  }
}
