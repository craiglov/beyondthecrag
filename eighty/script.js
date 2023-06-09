// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Get all the grid items
  var gridItems = document.querySelectorAll('.grid-item');

  // Define the array of image sources
  var images = [
    'beads/lightblue.png',
    'beads/white.png',
    'beads/lightpink.png',
    'beads/orange.png',
    'beads/lightgreen.png',
    'beads/red.png',
    'beads/dark.png',
    'beads/yellow.png',
    'beads/1.png',
    'beads/2.png',
    'beads/3.png',
    'beads/4.png',
    'beads/5.png',
    'beads/6.png',
    'beads/7.png',
    'beads/8.png',
    'beads/9.png',
    'beads/a.png',
    'beads/b.png',
    'beads/c.png',
    'beads/d.png',
    'beads/e.png',
    'beads/f.png',
    'beads/g.png',
    'beads/h.png',
    'beads/i.png',
    'beads/j.png',
    'beads/k.png',
    'beads/l.png',
    'beads/m.png',
    'beads/n.png',
    'beads/o.png',
    'beads/p.png',
    'beads/q.png',
    'beads/r.png',
    'beads/s.png',
    'beads/t.png',
    'beads/u.png',
    'beads/v.png',
    'beads/w.png',
    'beads/x.png',
    'beads/y.png',
    'beads/z.png'
  ];

  // Create the show/hide button element
  var toggleButton = document.createElement('button');
  toggleButton.className = 'toggle-button';
  toggleButton.innerHTML = 'Show UI';
  toggleButton.style.display = 'none';

  // Append the toggle button to the body
  document.body.appendChild(toggleButton);

  // Add click event listener to the toggle button
  toggleButton.addEventListener('click', function() {
    var uiElements = document.querySelectorAll('.ui-element');
    if (uiElements[0].style.display === 'none') {
      uiElements.forEach(function(element) {
        element.style.display = 'block';
      });
      toggleButton.innerHTML = 'Hide UI';
    } else {
      uiElements.forEach(function(element) {
        element.style.display = 'none';
      });
      toggleButton.innerHTML = 'Show UI';
    }
  });

  // Add click event listeners to the arrow elements
  gridItems.forEach(function(item) {
    // Set the initial index to 0
    item.querySelector('img').setAttribute('data-index', 0);

    // Create the up arrow element
    var upArrow = document.createElement('div');
    upArrow.className = 'arrow up-arrow ui-element';
    upArrow.innerHTML = "<button class=\"next\" name=\"myButton\">next</button>";

    // Create the down arrow element
    var downArrow = document.createElement('div');
    downArrow.className = 'arrow down-arrow ui-element';
    downArrow.innerHTML = "<button class=\"prev\" name=\"myButton\">back</button>";

    // Append the arrows to the grid item
    item.appendChild(upArrow);
    item.appendChild(downArrow);

    // Hide the arrows by default
    upArrow.style.display = 'none';
    downArrow.style.display = 'none';

    // Add click event listener to the up arrow
    upArrow.addEventListener('click', function(event) {
      event.stopPropagation();
      var img = item.querySelector('img');
      var currentIndex = parseInt(img.getAttribute('data-index'));
      var previousIndex = (currentIndex - 1 + images.length) % images.length;
      img.src = images[previousIndex];
      img.setAttribute('data-index', previousIndex);
    });

    // Add click event listener to the down arrow
    downArrow.addEventListener('click', function(event) {
      event.stopPropagation();
      var img = item.querySelector('img');
      var currentIndex = parseInt(img.getAttribute('data-index'));
      var nextIndex = (currentIndex + 1) % images.length;
      img.src = images[nextIndex];
      img.setAttribute('data-index', nextIndex);
    });
  });

  // Create the text input element
  var input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Prompt Answer';
  input.className = 'text-input ui-element';

  // Create the submit button element
  var submitButton = document.createElement('button');
  submitButton.innerHTML = 'Submit/Update';
  submitButton.className = 'submit-button ui-element';

  // Create the cycle button element
  var cycleButton = document.createElement('button');
  cycleButton.innerHTML = 'Change Prompt';
  cycleButton.className = 'cycle-button ui-element';

  // Append the UI elements to the body
  document.body.appendChild(input);
  document.body.appendChild(submitButton);
  document.body.appendChild(cycleButton);

  // Add click event listener to the submit button
  submitButton.addEventListener('click', function() {
    var enteredText = input.value;
    var promptaDiv = document.getElementById('prompta');
    promptaDiv.textContent = enteredText;
  });

  // Add click event listener to the cycle button
  var promptItem = document.querySelector('.prompt-item');
  var promptItemIndex = 0;
  cycleButton.addEventListener('click', function() {
    var urls = [
      'prompts/1.png',
      'prompts/2.png',
      'prompts/3.png',
      'prompts/4.png',
      'prompts/5.png'
    ];
    promptItemIndex = (promptItemIndex + 1) % urls.length;
    promptItem.querySelector('img').src = urls[promptItemIndex];
  });

  // Show the toggle button after a delay
  setTimeout(function() {
    toggleButton.style.display = 'block';
  }, 1000);




  // Add click event listener to add column button
  var addColumnButton = document.createElement('button');
  addColumnButton.innerHTML = 'Add Column';
  addColumnButton.className = 'add-column-button ui-element';
  document.body.appendChild(addColumnButton);

  // Add click event listener to remove column button
  var removeColumnButton = document.createElement('button');
  removeColumnButton.innerHTML = 'Remove Column';
  removeColumnButton.className = 'remove-column-button ui-element';
  document.body.appendChild(removeColumnButton);

 

// Add click event listener to add column button
addColumnButton.addEventListener('click', function() {
  var justifiedRows = document.querySelectorAll('.justify-content-center');
  justifiedRows.forEach(function(row) {
    var newGridItem = document.createElement('div');
    newGridItem.className = 'col-1 grid-item';
    newGridItem.innerHTML = `
      <img src="beads/lightblue.png">
      <div class="arrow up-arrow ui-element">
        <button class="next" name="myButton">next</button>
      </div>
      <div class="arrow down-arrow ui-element">
        <button class="prev" name="myButton">back</button>
      </div>
    `;
    row.appendChild(newGridItem);

    // Add click event listeners to the arrow elements
    var upArrow = newGridItem.querySelector('.up-arrow');
    var downArrow = newGridItem.querySelector('.down-arrow');
    var img = newGridItem.querySelector('img');
    var currentIndex = 0;

    upArrow.addEventListener('click', function(event) {
      event.stopPropagation();
      currentIndex = (currentIndex + 1) % images.length;
      img.src = images[currentIndex];
    });

    downArrow.addEventListener('click', function(event) {
      event.stopPropagation();
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      img.src = images[currentIndex];
    });
  });
});



// Add click event listener to remove column button
removeColumnButton.addEventListener('click', function() {
  var justifiedRows = document.querySelectorAll('.justify-content-center');
  justifiedRows.forEach(function(row) {
    if (row.children.length > 1) {
      var lastColumn = row.children[row.children.length - 1];
      row.removeChild(lastColumn);
    }
  });
});
document.addEventListener('DOMContentLoaded', function() {
  // Get all the sticker items
  var stickerItems = document.querySelectorAll('.sticker-item');

  // Define the array of image names
  var stickers = [
    'stickers/star.jpg',
    'stickers/hk.jpg',
    'stickers/emo.jpg',
    'stickers/ang.jpg',
    'stickers/7.jpg',
    'stickers/4.jpg',
    'stickers/9.jpg',
    'stickers/10.jpg',
    'stickers/bww.png',
    'stickers/blank.png'
  ];

  // Add click event listener to the sticker items
  stickerItems.forEach(function(item) {
    // Set the initial index to 0
    item.setAttribute('data-index', 0);

    // Add click event listener to the sticker item
    item.addEventListener('click', function() {
      // Get the current index
      var currentIndex = parseInt(item.getAttribute('data-index'));

      // Calculate the next index, wrapping around to the beginning if necessary
      var nextIndex = (currentIndex + 1) % stickers.length;

      // Set the image source based on the current index
      item.querySelector('img').src = stickers[nextIndex];

      // Update the data-index attribute with the new index
      item.setAttribute('data-index', nextIndex);
    });
  });
});
});

