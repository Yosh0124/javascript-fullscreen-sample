var fullscreen = document.getElementById("image-area");
var $image = $('#image-area');

$(document).ready(function(){
  $('.btn-fullscreen').click(function(){
    console.log('Clicked fullscreen button');
    if (fullscreen.webkitRequestFullScreen) {
      console.log('Show image in fullscreen mode.');
      fullscreen.webkitRequestFullScreen();
    }
    else if (fullscreen.mozRequestFullScreen) {
      console.log('Show image in fullscreen mode.');
      fullscreen.mozRequestFullScreen();
    }
    else {
        alert("not found")
    }
    // $image.addClass('fullscreen');
  });

  document.onfullscreenchange = document.onmozfullscreenchange = document.onwebkitfullscreenchange = document.onmsfullscreenchange = function ( event ) {
    $image.toggleClass('fullscreen');
  }
});