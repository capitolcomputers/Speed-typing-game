'use strict';

const settingbtn = document.getElementById('settings-btn');
const settingsBox = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const wordText = document.getElementById('word');
const textEl = document.getElementById('text');
const timeel = document.getElementById('time');
const scoreEl = document.getElementById('score');
const endGame = document.getElementById('end-game-container');
const difficultySelect = document.getElementById('difficulty');

// List of words for game
const words = [
  'sigh',
  'tense',
  'airplane',
  'ball',
  'pies',
  'juice',
  'warlike',
  'bad',
  'north',
  'dependent',
  'steer',
  'silver',
  'highfalutin',
  'superficial',
  'quince',
  'eight',
  'feeble',
  'admit',
  'drag',
  'diving',
  'loving',
  'love',
  'Heat',
  'summer',
];

textEl.focus()

let randomWord;

let score = 0

let time = 10

const timeInterval = setInterval(updateTime, 1000)

let difficulty = localStorage.getItem('difficulty') !== 'null' ?  localStorage.getItem('difficulty') : 'medium'

difficultySelect.value =  localStorage.getItem('difficulty') !== 'null' ?  localStorage.getItem('difficulty') : 'medium'




function generateRandomWord() {
  return words[Math.floor(Math.random() * words.length)]
}
generateRandomWord();

function addWordToDOM() {
  randomWord = generateRandomWord()
  wordText.innerHTML = randomWord;
  
}
addWordToDOM()

function updateScore () {
  score++
  scoreEl.innerHTML = score
}

function updateTime() {
time--
timeel.innerHTML =  time + 's'

if(time === 0) {
 clearInterval(timeInterval)
  gameOver()
}
}

function gameOver() {
  endGame.innerHTML = `
  <h1>Game Over<h1>
  <p> Your score is ${score} </p>
  <button onclick="location.reload()">Reload</button>
  `
  endGame.style.display = 'flex'
}



textEl.addEventListener('input', (e) => {
  e.preventDefault()

  const inputedText = e.target.value;

  if(inputedText === randomWord){
   addWordToDOM();
   e.target.value = ''
   updateScore();
   
    if(difficulty === 'hard') {
      time += 3;
    } else if (difficulty === 'medium') {
       time += 4;
    } else {
      time += 5;
    }
    updateTime();
  }
})

settingbtn.addEventListener('click', () => {
  settingsBox.classList.toggle('hide')
})

settingsForm.addEventListener('change', (e) => {
difficulty = e.target.value
 localStorage.setItem('difficulty', difficulty);
})























// const wordEl = document.getElementById('word');
// const text = document.getElementById('text');
// const scoreEl = document.getElementById('score');
// const timeEl = document.getElementById('time');
// const endgameEl = document.getElementById('end-game-container');
// const settingsBtn = document.getElementById('settings-btn');
// const settings = document.getElementById('settings');
// const settingsForm = document.getElementById('settings-form');
// const difficultySelect = document.getElementById('difficulty');

// // List of words for game
// const words = [
//   'sigh',
//   'tense',
//   'airplane',
//   'ball',
//   'pies',
//   'juice',
//   'warlike',
//   'bad',
//   'north',
//   'dependent',
//   'steer',
//   'silver',
//   'highfalutin',
//   'superficial',
//   'quince',
//   'eight',
//   'feeble',
//   'admit',
//   'drag',
//   'diving',
//   'loving',
//   'love',
//   'Heat',
//   'summer',
// ];

// let randomWord;
// let score = 0;
// let time = 10;

// const timeInt = setInterval(updateCount, 1000)

// let difficulty = localStorage.getItem('difficulty') !== 'null' ? localStorage.getItem('difficulty') : 'medium';



// difficultySelect.value =
//   localStorage.getItem('difficulty') !== 'null'
//     ? localStorage.getItem('difficulty')
//     : 'medium';

// text.focus()

// function generateRandomWord() {
//   return words[Math.floor(Math.random() * words.length)]
// }

// function addWordToDOM() {
// randomWord = generateRandomWord();
//   wordEl.innerHTML = randomWord
// }
// addWordToDOM();

// function updateScore() {
//   score++;
//   scoreEl.innerHTML = score;
// }

// function updateCount () {
//   time--;
//   timeEl.innerHTML = time + 's'

//   if(time === 0) {
//     clearInterval(timeInt)
//     gameOver()
//   }
// }

// function gameOver() {
//   endgameEl.innerHTML = `
//   <h1>Game Over<h1>
//   <p>Your final score is ${score}</p>
//   <button onclick="location.reload()">Reload</button>
//   `
//   endgameEl.style.display = 'flex'
// }


// text.addEventListener('input', (e) => {
//   const inputedText = e.target.value;
  
//   if(inputedText === randomWord) {
//     addWordToDOM()
//      updateScore();
//     e.target.value = ''

//     updateScore()
    
//      if(difficulty === 'hard'){
//        time += 3;
//      } else if (difficulty === 'medium'){
//        time += 4
//      } else {
//        time +=5
//      }

//   updateCount(); 
// }
//  });



// settingsBtn.addEventListener('click', () => {
//   settings.classList.toggle('hide')
// })

// settingsForm.addEventListener('change', (e) => {
//   difficulty = e.target.value

//   localStorage.setItem('difficulty', difficulty )
// })