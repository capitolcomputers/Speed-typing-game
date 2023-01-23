'use strict'

const wordEl = document.getElementById('word')
const textEl = document.getElementById('text')
const scoreEl = document.getElementById('score')
const timeEl = document.getElementById('time')
const endgameEl = document.getElementById('end-game-container')
const settingsBtn = document.getElementById('settings-btn')
const settings = document.getElementById('settings')
const settingsForm = document.getElementById('settings-form')
const difficultySelect = document.getElementById('difficulty')

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
  'summer'
];

//  Rndom Variable
let randomWord;

//Score
let score = 0

// time countdown
 let time = 10
//  BUG

//input-Value onFocus
textEl.focus()

let difficulty = localStorage.getItem('difficulty') !== 'null' ? localStorage.getItem('difficulty') : 'medium';
console.log(difficulty);

// // display value/variable localstorage on difficulty
difficultySelect.value =
  localStorage.getItem('difficulty') !== 'null'
    ? localStorage.getItem('difficulty')
    : 'medium';
    console.log(difficultySelect.value);




 const updateSecCount = setInterval(updateTimeCount, 1000)

//  Get random word variable 
function getRandomWord () {
  return words[Math.floor(Math.random() * words.length)]
}

function updateScore () {
  score++;
  scoreEl.innerHTML = score
}

//  function gameOver
  function gameOver() {
    endgameEl.innerHTML = `
    <h2>Game Over</h2>
    <p>Your high score is ${score}</p>

    <button onclick="location.reload()">Replay again </button>
    `
     endgameEl.style.display = 'flex';
  }

function updateTimeCount () {
  time--;
  timeEl.innerHTML = time + 's'
  if(time < 1) {
    clearInterval(updateSecCount)

    gameOver()
  }
}

// Add word to DOM
function addWordToDOM() {
  randomWord = getRandomWord()
  wordEl.innerHTML = randomWord
}
addWordToDOM()

//   Event listener on input Value

textEl.addEventListener('input', (e) => {
  const inputedValue = e.target.value;
  
  if (inputedValue === randomWord) {
    addWordToDOM();
      updateScore();
       e.target.value = '';

    if(difficulty === 'easy') {
      time+= 5
    } else if (difficulty === 'medium') {
      time += 3
    } else {
      time += 2;
    }
     updateTimeCount(); 
  }
});

settingsBtn.addEventListener('click', e => {
  settings.classList.toggle('hide')
})

settingsForm.addEventListener('change', e => {
  difficulty = e.target.value;
  localStorage.setItem('difficulty', difficulty);
})



// //Rndom word
// let randomWord;

// let score = 0;

// //time
// let time = 11;

// //Dificulty!
// let difficulty = localStorage.getItem('difficulty') !== 'null' ? localStorage.getItem('difficulty') : 'medium';

// // display value/variable localstorage on difficulty
// difficultySelect.value =
//   localStorage.getItem('difficulty') !== 'null'
//     ? localStorage.getItem('difficulty')
//     : 'medium';

// text.focus()

// // //Generate random word from array
// function getRandomWord () {
//   return words[Math.floor(Math.random() * words.length)]
// }

// function updateScore () {
//   score++;
//   scoreEl.innerHTML = score
// }

// function gameOver() {
//   endgameEl.innerHTML = `
//   <h2> Time Ran out 🎉✨</h2>
//   <p> Your final score is ${score}</p>

//   <button onclick="location.reload()"> Replay </button>
//   `;

//   endgameEl.style.display = 'flex'
// }

// const timeInterval = setInterval(updateTime, 1000)

// function updateTime () {
//   time--;
//   timeEl.innerHTML = time + 's';
//     if (time === 0) {
//       clearInterval(timeInterval)

//       //end game
//       gameOver()
//     }
// }
// //  updateTime();

// //add word to dom
// function addWordToDOM() {
//   randomWord = getRandomWord()
//   word.innerHTML = randomWord
// }
// addWordToDOM()

// text.addEventListener('input', e => {
//   const inputText = e.target.value
//   console.log(inputText);

//   if (inputText === randomWord){
    
//      addWordToDOM();
//      updateScore();

//      e.target.value = ''

//     if (difficulty === 'easy') {
//        time += 5;
//     } else if (difficulty === 'medium') {
//       time += 3;
//     } else {
//       time += 2;
//     }
    
//       updateTime();
//   } 
// })

// settingsBtn.addEventListener('click', e => {
//   settings.classList.toggle('hide')
// })

// settingsForm.addEventListener('change', e => {
//   difficulty = e.target.value;
//  localStorage.setItem('difficulty', difficulty)
// })
