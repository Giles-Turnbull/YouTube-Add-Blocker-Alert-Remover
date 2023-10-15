function removeDiv() {
    var divToRemove = document.querySelector('tp-yt-paper-dialog[style-target="host"]');
    if (divToRemove) {
      divToRemove.remove();
    }
  }
  
  // Execute the function when the page is fully loaded.
  window.addEventListener('load', removeDiv);
  