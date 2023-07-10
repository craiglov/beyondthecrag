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
    'audioOnDiv': `<div class="sound" onmouseover="playSound()" onclick="loopAudio()"></div>`,
    'toChestDiv': `<div class="hoverbook" onmouseover="playSound()" onclick="changeRoom('chest')"></div>`,
    'toAbstractDiv': `<div class="toAbstract" onmouseover="playSound()" onclick="changeRoom('abstract')"></div>`,
    'wellsNoiseDiv': `<div class="wells" onclick="playWells()"></div>`,
    'navDiv': `<div class="nav"></div>`,
    'mouseDiv': `<div class="hovermouse" onclick="playVideo()" onmouseover="playSound()"></div>`,
    'backDiv': `<div class="back" onmouseover="playSound()" onclick="changeRoom(rooms[currentRoom]['previous'])"></div>`,
    'vidDiv': ` <video id='80' class="vid" >
    <source src="vid/eg2.mp4" type="video/mp4">Your browser does not support the video tag.</video><div class="scan"></div> `
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
        'previous':'main'
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
        'previous':'main'
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
        'previous':'desk'
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
        'previous':'chest'
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
        'previous':'main'
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
    let container = document.getElementsByClassName('bg-container')[0];
    container.classList.add('fade');


    // Wait for the transition to finish before calling the callback
    setTimeout(callback, 500);
}

function fadeInRoom() {
    let container = document.getElementsByClassName('bg-container')[0];
    container.classList.remove('fade');

     // play the sound
}


// Call loadRoom() once at the start to load the initial room
loadRoom();
