/*

// Get DOM elements
const storyElement = document.getElementById('story');
const choiceElements = document.getElementsByClassName('choice');
const resultElement = document.getElementById('result');
const restartContainer = document.getElementById('restart-container');
const restartButton = document.getElementById('restart-button');
const endButton = document.getElementById('end-button');

// Game state variables
let storyIndex = 0;

// Game story content
const gameStory = [
  {
    text: 'You wake up in a mysterious forest. What do you do?',
    choices: ['Explore the forest', 'Follow a path', 'Climb a tree'],
    results: [
      'As you explore the forest, you find a hidden treasure chest!',
      'You come across a friendly woodland creature who leads you to safety.',
      'You climb a tree and spot a hidden cave. You decide to investigate.'
    ]
  },
  {
    text: 'You enter the cave and discover a hidden underground chamber. What do you do?',
    choices: ['Search for treasure', 'Investigate strange noises', 'Leave the chamber'],
    results: [
      'You find a chest filled with gold and jewels. You become rich!',
      'You encounter a group of friendly creatures having a party. They invite you to join them.',
      'You decide to leave the chamber and continue your adventure elsewhere.'
    ]
  },
  {
    text: 'You stumble upon an ancient temple. How do you proceed?',
    choices: ['Enter the temple', 'Read the inscriptions', 'Leave the area'],
    results: [
      'You enter the temple and uncover a powerful artifact that grants you extraordinary abilities.',
      'By deciphering the inscriptions, you unlock the secrets of the temple and gain ancient knowledge.',
      'You decide to leave the area and explore other parts of the world.'
    ]
  },
  {
    text: 'You reach the top of a snowy mountain. What do you do?',
    choices: ['Build a snowman', 'Slide down the slope', 'Search for hidden treasures'],
    results: [
      'You build a magnificent snowman and have a great time playing in the snow.',
      'You slide down the slope with excitement, feeling the adrenaline rush.',
      'You discover a hidden cave filled with treasures. Your adventure has paid off!'
    ]
  },
  {
    text: 'You find yourself in a bustling city. How do you spend your time?',
    choices: ['Visit a museum', 'Enjoy street performances', 'Explore the city'],
    results: [
      'You visit a museum and learn about fascinating history and art.',
      'You watch mesmerizing street performances that leave you inspired.',
      'You explore the city streets, discovering hidden gems and meeting interesting people.'
    ]
  },
  {
    text: 'You encounter a mysterious portal. What do you do?',
    choices: ['Step through the portal', 'Investigate further', 'Ignore the portal'],
    results: [
      'You step through the portal and find yourself in a magical realm of wonders and adventures.',
      'By investigating further, you uncover the secrets of the portal and gain new knowledge.',
      'You ignore the portal and continue your journey, curious about what lies ahead.'
    ]
  },
  {
    text: 'The adventure has come to an end. Thanks for playing!',
    choices: [],
    results: []
  }
];

// Function to update the game based on player's choice
function updateGame(choice) {
  resultElement.textContent = gameStory[storyIndex].results[choice];
  storyIndex++;

  if (storyIndex < gameStory.length) {
    storyElement.textContent = gameStory[storyIndex].text;

    for (let i = 0; i < choiceElements.length; i++) {
      if (i < gameStory[storyIndex].choices.length) {
        choiceElements[i].textContent = gameStory[storyIndex].choices[i];
        choiceElements[i].style.display = 'block';
      } else {
        choiceElements[i].style.display = 'none';
      }
    }
  } else {
    // Game ends
    storyElement.textContent = gameStory[storyIndex].text;
    for (let i = 0; i < choiceElements.length; i++) {
      choiceElements[i].style.display = 'none';
    }
    restartContainer.style.opacity = 1;
  }
}

// Function to reset the game
function resetGame() {
  storyIndex = 0;
  storyElement.textContent = gameStory[storyIndex].text;

  for (let i = 0; i < choiceElements.length; i++) {
    choiceElements[i].style.display = 'block';
  }

  resultElement.textContent = '';
  restartContainer.style.opacity = 0;
}

// Event listeners for choices
for (let i = 0; i < choiceElements.length; i++) {
  choiceElements[i].addEventListener('click', function() {
    updateGame(i);
  });
}

// Event listeners for restart and end buttons
restartButton.addEventListener('click', resetGame);
endButton.addEventListener('click', function() {
  window.close(); // Close the browser window/tab
});


*/

const storyContainer = document.getElementById('story-container');
const storyElement = document.getElementById('story');
const choicesElement = document.getElementById('choices');
const resultElement = document.getElementById('result');
const restartButton = document.getElementById('restart-button');
const endButton = document.getElementById('end-button');

let currentStoryIndex = 0;
let gameEnded = false;

const stories = [
  {
    story: 'You wake up in a mysterious forest. What do you do?',
    choices: [
      'Explore the forest',
      'Follow a path',
      'Climb a tree'
    ],
    outcomes: [
      'You come across a hidden treasure chest and find valuable items.',
      'You encounter a friendly squirrel who leads you to a magical waterfall.',
      'As you climb the tree, you spot a rare bird species and feel a sense of wonder.'
    ]
  },
  {
    story: 'You find a dusty old book in an abandoned library. What do you do?',
    choices: [
      'Read the book',
      'Leave the library',
      'Search for other books'
    ],
    outcomes: [
      'As you read the book, you get transported to a fantastical world of adventure.',
      'You exit the library and discover a hidden garden with vibrant flowers.',
      'While searching for other books, you stumble upon a secret passage to an underground chamber.'
    ]
  },
  {
    story: 'You receive a mysterious letter inviting you to a haunted mansion. What do you do?',
    choices: [
      'Accept the invitation and go to the mansion',
      'Ignore the invitation and continue with your daily routine',
      'Investigate the origin of the letter'
    ],
    outcomes: [
      'You arrive at the haunted mansion and uncover its dark secrets.',
      'You carry on with your daily routine, but a nagging curiosity lingers in your mind.',
      'As you investigate, you discover a secret society behind the letter and become embroiled in a thrilling conspiracy.'
    ]
  },
  {
    story: 'You stumble upon a time machine hidden in an old laboratory. What do you do?',
    choices: [
      'Activate the time machine and travel to the past',
      'Activate the time machine and travel to the future',
      'Leave the laboratory and forget about the time machine'
    ],
    outcomes: [
      'You travel to the past and witness historical events firsthand, learning valuable lessons.',
      'You travel to the future and see a world filled with advanced technology and new possibilities.',
      'You leave the laboratory, but the allure of time travel lingers, leaving you wondering what could have been.'
    ]
  },
  
  // Add more stories here
];

function displayStory() {
  const story = stories[currentStoryIndex];
  storyElement.textContent = story.story;
  choicesElement.innerHTML = '';
  
  story.choices.forEach((choice, index) => {
    const choiceButton = document.createElement('button');
    choiceButton.classList.add('choice');
    choiceButton.textContent = choice;
    choiceButton.addEventListener('click', () => makeChoice(index));
    choicesElement.appendChild(choiceButton);
  });
}

function makeChoice(choiceIndex) {
  const story = stories[currentStoryIndex];
  const outcome = story.outcomes[choiceIndex];
  
  resultElement.textContent = outcome;
  resultElement.style.display = 'block';
  
  if (currentStoryIndex === stories.length - 1) {
    endButton.style.display = 'inline-block';
  } else {
    currentStoryIndex++;
    setTimeout(displayStory, 2000);
  }
}

function restartGame() {
  currentStoryIndex = 0;
  resultElement.textContent = '';
  resultElement.style.display = 'none';
  endButton.style.display = 'none';
  displayStory();
}

function endGame() {
  gameEnded = true;
  restartButton.style.display = 'none';
  endButton.style.display = 'none';
  resultElement.textContent = 'Thank you for playing!';
  resultElement.style.display = 'block';
}

displayStory();
