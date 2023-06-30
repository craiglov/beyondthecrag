var text = "Welcome to the Cragnet";
var currentIndex = 0;

function typeWriter() {
  var div = document.getElementById('typing-effect');
  div.innerHTML += text.charAt(currentIndex);

  if (currentIndex < text.length - 1) {
    currentIndex++;
    setTimeout(typeWriter, 100);
  }
}

setTimeout(typeWriter, 2000);
