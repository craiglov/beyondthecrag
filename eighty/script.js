// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get all the grid items
    var gridItems = document.querySelectorAll('.grid-item');
  
    // Define the array of image sources
    var images = [
      'beads/lightblue.png',
      'beads/white.png',
      'beads/lightpink.png',
      'beads/lightorange.png',
      'beads/lightgreen.png',
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
      var arrows = document.querySelectorAll('.arrow');
      if (arrows[0].style.display === 'none') {
        arrows.forEach(function(arrow) {
          arrow.style.display = 'block';
        });
        createTextInput();
        toggleButton.innerHTML = 'Hide UI';
      } else {
        arrows.forEach(function(arrow) {
          arrow.style.display = 'none';
        });
        removeTextInput();
        toggleButton.innerHTML = 'Show Arrows';
      }
    });
  
    // Add click event listeners to the arrow elements
    gridItems.forEach(function(item) {
      // Set the initial index to 0
      item.querySelector('img').setAttribute('data-index', 0);
  
      // Create the up arrow element
      var upArrow = document.createElement('div');
      upArrow.className = 'arrow up-arrow';
      upArrow.innerHTML = '&#8593;';
  
      // Create the down arrow element
      var downArrow = document.createElement('div');
      downArrow.className = 'arrow down-arrow';
      downArrow.innerHTML = '&#8595;';
  
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
  
    // Show the toggle button after a delay
    setTimeout(function() {
      toggleButton.style.display = 'block';
    }, 1000);
  
    function createTextInput() {
      var inputContainer = document.createElement('div');
      inputContainer.className = 'input-container';
  
      var input = document.createElement('input');
      input.type = 'text';
      input.placeholder = 'Enter text';
      input.className = 'text-input';
  
      var submitButton = document.createElement('button');
      submitButton.innerHTML = 'Submit';
      submitButton.className = 'submit-button';
  
      inputContainer.appendChild(input);
      inputContainer.appendChild(submitButton);
      document.body.appendChild(inputContainer);
  
      submitButton.addEventListener('click', function() {
        var enteredText = input.value;
        var promptaDiv = document.getElementById('prompta');
        promptaDiv.textContent = enteredText;
      });
    }
  
    function removeTextInput() {
      var inputContainer = document.querySelector('.input-container');
      if (inputContainer) {
        inputContainer.remove();
      }
    }
  });
  