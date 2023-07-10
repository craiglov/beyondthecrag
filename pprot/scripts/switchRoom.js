/*let clickables = {
    'toDeskDiv': `<div class="hovercd" onmouseover="playSound()" onclick="openLink('personalprotocol.html')"></div>`,
    'toComputerDiv': `<div class="hoverbook" onmouseover="playSound()" onclick="openLink('key.html')"></div>`,
    'toHomeDiv': `<div class="home" onmouseover="playSound()" onclick="openLink('main.html')"></div>`,
    'audioOnDiv': `<div class="sound" onmouseover="playSound()" onclick="loopAudio()"></div>`,
    'toChestDiv': `<div class="hoverbook" onmouseover="playSound()" onclick="openLink('key.html')"></div>`,
    'toAbstractDiv': `<div class="hovercd" onmouseover="playSound()" onclick="openLink('abstract.html')"></div>`,
    'wellsNoiseDiv': `<div class="wells" onclick="playWells()"></div>`,
    'navDiv': `<div class="nav"></div>`,
    'mouseDiv': `<div class="hovermouse" onclick="playVideo()" onmouseover="playSound()"></div>`
};*/
let clickables = {
    'toDeskDiv': `<div class="hovercd" onmouseover ="playSound()" onclick="changeRoom('desk')"></div>`,
    'toComputerDiv': `<div class="toComputer" onmouseover="playSound()" onclick="changeRoom('computer')"></div>`,
    'toHomeDiv': `<div class="home" onmouseover="playSound()" onclick="changeRoom('main')"></div>`,
    'audioOnDiv': `<div class="sound" onmouseover="playSound()"></div>`,
    'toChestDiv': `<div class="hoverbook" onmouseover="playSound()" onclick="changeRoom('chest')"></div>`,
    'toAbstractDiv': `<div class="toAbstract" onmouseover="playSound()" onclick="changeRoom('abstract')"></div>`,
    'wellsNoiseDiv': `<div class="wells" onclick="playWells()"></div>`,
    'navDiv': `<div class="nav"></div>`,
    'mouseDiv': `<div class="hovermouse" onclick="playVideo()" onmouseover="playSound()"></div>`,
    'backDiv': `<div class="back" onmouseover="playSound()" onclick="changeRoom(rooms[currentRoom]['previous'])"></div>`,
    'vidDiv': ` <video id='80' class="vid" >
    <source src="vid/eg2.mp4" type="video/mp4">Your browser does not support the video tag.</video><div class="scan"></div> `,
    'fxDiv': `<div class="fx" onmouseover="playSound()"></div>`,
};
let rooms = {
    'main': {
        'navDiv':1,
        'toDeskDiv': 1,
        'toComputerDiv': 0,
        'toHomeDiv': 1,
        'audioOnDiv': 1,
        'toChestDiv': 1,
        'toAbstractDiv': 0,
        'wellsNoiseDiv':0,
        'mouseDiv':0,
        'backDiv':1,
        'background': 'url("img/full.jpg")',
        'previous':'main',
        'fxDiv': 1
    },
    'desk': {
        'navDiv':1,
        'toDeskDiv': 0,
        'toComputerDiv': 1,
        'toHomeDiv': 1,
        'audioOnDiv': 1,
        'toChestDiv': 0,
        'toAbstractDiv': 0,
        'wellsNoiseDiv':0,
        'mouseDiv':0,
        'backDiv':1,
        'background': 'url("img/personal.jpg")',
        'previous':'main',
        'fxDiv': 1
    },
    'computer': {
        'navDiv':1,
        'toDeskDiv': 0,
        'toComputerDiv': 0,
        'toHomeDiv': 1,
        'audioOnDiv': 1,
        'toChestDiv': 0,
        'toAbstractDiv': 0,
        'wellsNoiseDiv':0,
        'mouseDiv':1,
        'backDiv':1,
        'background': 'url("img/zoom.jpg")',
        'vidDiv':1,
        'previous':'desk',
        'fxDiv': 1
    },
    'abstract': {
        'navDiv':1,
        'toDeskDiv': 0,
        'toComputerDiv': 0,
        'toHomeDiv': 1,
        'audioOnDiv': 1,
        'toChestDiv': 0,
        'toAbstractDiv': 0,
        'wellsNoiseDiv':0,
        'mouseDiv':0,
        'backDiv':1,
        'background': 'url("img/abstract.jpg")',
        'previous':'chest',
        'fxDiv': 1
    },
    'chest': {
        'navDiv':1,
        'toDeskDiv': 0,
        'toComputerDiv': 0,
        'toHomeDiv': 1,
        'audioOnDiv': 1,
        'toChestDiv': 0,
        'toAbstractDiv': 1,
        'wellsNoiseDiv':0,
        'mouseDiv':0,
        'backDiv':1,
        'background': 'url("img/key.jpg")',
        'previous':'main',
        'fxDiv': 1
    },
    // add more rooms as needed
};

let currentRoom = 'main';  // start in main

function changeRoom(newRoom) {
    if (rooms.hasOwnProperty(newRoom)) {  // check if the new room name is valid
        fadeOutRoom(function() {
            currentRoom = newRoom;
            loadRoom();
            fadeInRoom();
        });
    } else {
        console.error('Invalid room name:', newRoom);
    }
}



function loadRoom() {
    let roomDivs = rooms[currentRoom];
    let roomHTML = '';

    for (let div in roomDivs) {
        if (roomDivs[div] === 1) {
            roomHTML += clickables[div];
        }
    }

    let container = document.getElementsByClassName('bg-container')[0];
    container.innerHTML = roomHTML;
    container.style.backgroundImage = roomDivs['background'];

}


function fadeOutRoom(callback) {
    const container = document.getElementsByClassName('bg-container')[0];
    container.classList.add('fade');
  
    // Wait for the transition to finish before invoking the callback
    const transitionDuration = 500; // Transition duration in milliseconds
    setTimeout(() => {
      container.classList.remove('fade');
      if (typeof callback === 'function') {
        callback();
      }
    }, transitionDuration);
  }
  
function fadeInRoom() {
    let container = document.getElementsByClassName('bg-container')[0];
    container.classList.remove('fade');

     // play the sound
}



// Call loadRoom() once at the start to load the initial room
loadRoom();
const soundDiv = document.querySelector('.sound');
const fxDiv = document.querySelector('.fx');
const bodyElement = document.querySelector('body');
const audioElement = new Audio('sound/amb.mp3');
let isAnimationOn = false;
let isPlaying = false;
fxDiv.addEventListener('click', function() {
if (isAnimationOn) {
    bodyElement.classList.remove('pulsing-animation');
    isAnimationOn = false;
  } else {
    bodyElement.classList.add('pulsing-animation');
    isAnimationOn = true;
  }
}); 
audioElement.addEventListener('ended', function() {
    audioElement.currentTime = 0; // Reset the playback position to the beginning
    audioElement.play();
  });
  
  soundDiv.addEventListener('click', function() {
    if (!isPlaying) {
      audioElement.loop = true;
      audioElement.currentTime = 0; // Reset the playback position to the beginning
      audioElement.play();
      isPlaying = true;
      soundDiv.classList.add('active'); // Add a class to indicate active state
    } else {
      audioElement.loop = false;
      audioElement.pause();
      isPlaying = false;
      soundDiv.classList.remove('active'); // Remove the class for inactive state
    }
  });
  