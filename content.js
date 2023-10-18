function removeDiv() {
  var divToRemove = document.querySelector('tp-yt-paper-dialog[style-target="host"]');
  if (divToRemove) {
    // Remove the element
    divToRemove.remove();

    // Play the video after a short delay (e.g., 100 milliseconds)
    setTimeout(function() {
      var video = document.querySelector('video');
      if (video && video.paused) {
        video.play();
      }
    }, 100);
  }
}

// Execute the function when the page is fully loaded.
window.addEventListener('load', removeDiv);