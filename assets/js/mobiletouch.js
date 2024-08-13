$(document).ready(function() {
    $('#grid-lettering a').click(function(event){
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        event.preventDefault();
      }
    });
  });